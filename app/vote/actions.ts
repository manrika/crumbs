"use server";

import { createClient } from "@/lib/supabase/server";

type VoteResult = {
  success: boolean;
  error?: string;
};

export async function submitVote(
  nomineeId: string,
  name: string,
  email: string,
): Promise<VoteResult> {
  const supabase = await createClient();

  // Validate inputs
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const parsedNomineeId = Number(nomineeId);

  if (!trimmedName) {
    return { success: false, error: "Please enter your name" };
  }

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    };
  }

  if (!Number.isSafeInteger(parsedNomineeId) || parsedNomineeId <= 0) {
    return {
      success: false,
      error: "Please select a nominee",
    };
  }

  // Insert vote
  const { error } = await supabase.from("crumbies_votes").insert({
    crumbs_nominee: parsedNomineeId,
    name: trimmedName,
    email: trimmedEmail,
  });

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        error: "One vote per email, crumbie! You've already voted 💌",
      };
    }

    console.error("Vote submission error:", error);

    return {
      success: false,
      error: "Sorry, we couldn't submit your vote. Please try again.",
    };
  }

  return { success: true };
}
