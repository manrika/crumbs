"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

const BreadCrumbs: React.FC = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((segment, index) => ({
    label: segment,
    href: "/" + segments.slice(0, index + 1).join("/"),
  }));

  const textStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: 10,
    lineHeight: "20px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#361D00",
    display: "inline-flex",
    alignItems: "center",
  };

  const underlineStyles = {
    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "5px",
    },
  };

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        color: "#361D00",
        display: "flex",
        alignItems: "center",
        "& .MuiBreadcrumbs-ol": {
          alignItems: "center",
        },
        "& .MuiBreadcrumbs-li": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <MuiLink
        component={Link}
        href="/"
        underline="hover"
        sx={{
          ...textStyles,
          ...underlineStyles,
        }}
      >
        Home
      </MuiLink>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return isLast ? (
          <Typography key={item.href} sx={textStyles}>
            {item.label}
          </Typography>
        ) : (
          <MuiLink
            key={item.href}
            component={Link}
            href={item.href}
            underline="hover"
            sx={{
              ...textStyles,
              ...underlineStyles,
            }}
          >
            {item.label}
          </MuiLink>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
