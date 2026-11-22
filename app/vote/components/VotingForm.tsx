"use client";
import { Box, Typography } from "@mui/material";
import SingleSelectCardList from "@/app/components/SingleSelectCardList";
import Button from "@/app/components/Button";
import { useState } from "react";
import Input from "@/app/components/Input";
import { CrumbiesNominee } from "@/app/types";

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextEmail = e.target.value;

    setEmail(nextEmail);

    if (emailTouched) {
      setEmailError(
        nextEmail.trim() === "" || !isValidEmail(nextEmail)
          ? "Please enter a valid email address."
          : "",
      );
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);

    if (!email.trim() || !isValidEmail(email.trim())) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const onPress = () => {
    // todo: submit vote
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
          onChange={setFlavour}
          name="flavour"
        />
      </Box>
      <Input
        label="Name"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
          label="Vote now"
          onPress={onPress}
          disabled={!flavour || !name.trim() || !isValidEmail(email.trim())}
        />
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
      </Box>
    </Box>
  );
};

export default VotingForm;
