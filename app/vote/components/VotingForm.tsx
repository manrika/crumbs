"use client";
import { Box, Typography } from "@mui/material";
import SingleSelectCardList from "@/app/components/SingleSelectCardList";
import Button from "@/app/components/Button";
import { useState } from "react";
import Input from "@/app/components/Input";
import { CrumbiesNominee } from "@/app/types";
import { submitVote } from "@/app/vote/actions";

type Props = {
  nominees: CrumbiesNominee[];
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const VotingForm: React.FC<Props> = ({ nominees }) => {
  const [flavour, setFlavour] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearSuccessMessage = () => {
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextEmail = e.target.value;
    clearSuccessMessage();

    setEmail(nextEmail);

    if (emailTouched) {
      setEmailError(
        nextEmail.trim() === "" || !isValidEmail(nextEmail)
          ? "Please enter a valid email address"
          : "",
      );
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);

    if (!email.trim() || !isValidEmail(email.trim())) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const onPress = async () => {
    setSubmitError("");
    setSuccessMessage("");

    if (!flavour || !name.trim() || !isValidEmail(email.trim())) {
      setSubmitError("Please complete all fields with valid details");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitVote(flavour, name, email);

      if (!result.success) {
        setSubmitError(result.error ?? "Something went wrong");
        return;
      }

      setSuccessMessage("Vote locked in! May the best crumb win 🍪");

      // Optional: clear the form
      setFlavour("");
      setName("");
      setEmail("");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Typography
          component="label"
          sx={{
            color: "#3D2008",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Select your favourite
        </Typography>
        <SingleSelectCardList
          options={nominees}
          value={flavour}
          onChange={(value) => {
            setFlavour(value);
            clearSuccessMessage();
          }}
          name="flavour"
        />
      </Box>
      <Input
        label="Name"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          clearSuccessMessage();
        }}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="crumbs.lover@gmail.com"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={!!emailError}
        helperText={emailError}
        required
        autoComplete="email"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          loading={isSubmitting}
          label="Vote now"
          onPress={onPress}
          disabled={!flavour || !name.trim() || !isValidEmail(email.trim())}
        />
        {!submitError && !successMessage && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "rgba(54, 29, 0, 0.7)",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            The winner will be emailed!
          </Typography>
        )}
        {submitError && (
          <Typography
            role="alert"
            sx={{
              color: "#361D00",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            {submitError}
          </Typography>
        )}

        {successMessage && (
          <Typography
            role="status"
            sx={{
              color: "#39845A",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default VotingForm;
