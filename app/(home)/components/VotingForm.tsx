"use client";
import { Box } from "@mui/material";
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
  const [flavour, setFlavour] = useState("funfetti");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: "22px",
        borderWidth: "2px",
        borderRadius: "24px",
        borderColor: "#BCB4DD",
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
      <Button
        label="hi felicia"
        onPress={() => console.log("yooooo yooo yoo")}
      />
    </Box>
  );
};

export default VotingForm;
