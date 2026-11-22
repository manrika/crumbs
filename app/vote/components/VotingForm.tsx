"use client";
import { Box, Typography } from "@mui/material";
import SingleSelectCardList from "@/app/components/SingleSelectCardList";
import Button from "@/app/components/Button";
import { useState } from "react";
import Input from "@/app/components/Input";
import { Flavour } from "@/app/types";

const flavours = [
  {
    value: "triple-chocolate",
    title: "Triple Chocoalte",
    description: "The full drama.",
  },
  {
    value: "choc-chip-walnut",
    title: "Choc Chip Walnut",
    description: "The sophisticated classic.",
  },
  {
    value: "funfetti",
    title: "Funfetti",
    description: "The life of the after-party",
  },
  {
    value: "chai-latte",
    title: "Chai Latte",
    description: "The spicy scene-stealer",
  },
  {
    value: "kinder-bueno",
    title: "Kinder Bueno",
    description: "The crowd-pleasing icon",
  },
];

type Props = {
  flavours: Flavour[];
};

const VotingForm: React.FC<Props> = ({ flavours }) => {
  const [flavour, setFlavour] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("selected flavourrrr", flavour);

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
      <SingleSelectCardList
        options={flavours}
        value={flavour}
        onChange={setFlavour}
        name="flavour"
      />
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
