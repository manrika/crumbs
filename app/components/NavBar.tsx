"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";

const NavBar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItemStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      color: "#361D00",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "24px",
        py: "16px",
        px: "42px",
        backgroundColor: "#BCB4DD",
      }}
    >
      <Typography
        onClick={() => scrollToSection("flavours")}
        sx={navItemStyles}
      >
        Flavours
      </Typography>

      <Typography onClick={() => scrollToSection("pop-ups")} sx={navItemStyles}>
        Pop-ups
      </Typography>

      <Typography component={Link} href="/vote" sx={navItemStyles}>
        Win
      </Typography>
    </Box>
  );
};

export default NavBar;
