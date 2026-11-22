"use client";

import Link from "next/link";
import { Typography } from "@mui/material";

const CrumbsLogo = () => {
  return (
    <Typography
      component={Link}
      href="/"
      sx={{
        fontFamily: "'Truculenta'",
        fontSize: 26,
        color: "#BCB4DD",
        letterSpacing: "5%",
        textTransform: "uppercase",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": {
          opacity: 0.8,
        },
      }}
    >
      CRUMBS LDN
    </Typography>
  );
};

export default CrumbsLogo;
