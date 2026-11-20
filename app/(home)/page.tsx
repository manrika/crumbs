import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

import VotingForm from "@/app/(home)/components/VotingForm";
import { Box } from "@mui/material";
import { Flavour } from "@/app/types";
import FlavoursCarousel from "@/app/components/FlavoursCarousel";
import CrumbsLogo from "@/app/components/CrumbsLogo";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>();

  console.log("data", data);
  console.log("error", error);

  const classicFlavours = data?.filter(
    (flavour) => flavour.category === "classic",
  );
  const seasonalFlavours = data?.filter(
    (flavour) => flavour.category === "seasonal",
  );

  return (
    <Box sx={{ backgroundColor: "#FEF8F5", px: "36px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: "32px" }}>
        <CrumbsLogo />
      </Box>
      <FlavoursCarousel title="Classics" flavours={classicFlavours || []} />
      <FlavoursCarousel title="Seasonals" flavours={seasonalFlavours || []} />
      <VotingForm flavours={data || []} />
    </Box>
  );
}
