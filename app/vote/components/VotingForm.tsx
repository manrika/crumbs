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

const VotingForm: React.FC<Props> = ({ nominees }) => {
  const [flavour, setFlavour] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        placeholder="crumbs.lover@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          label="Vote now"
          onPress={onPress}
          disabled={!flavour || !name || !email}
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
