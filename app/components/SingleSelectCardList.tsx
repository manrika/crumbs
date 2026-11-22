import * as React from "react";
import { Box, Typography } from "@mui/material";
import { CrumbiesNominee } from "@/app/types";

type SingleSelectCardListProps = {
  options: CrumbiesNominee[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
};

const SingleSelectCardList: React.FC<SingleSelectCardListProps> = ({
  options,
  value = "",
  onChange,
  name = "single-select-card-list",
}) => {
  return (
    <Box
      role="radiogroup"
      aria-label={name}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "12px",
      }}
    >
      {options.map((option) => {
        const selected = value === option.id;

        return (
          <Box
            key={option.id}
            component="button"
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange?.(option.id)}
            sx={{
              appearance: "none",
              display: "block",
              width: "100%",
              p: 0,
              textAlign: "left",
              font: "inherit",
              cursor: "pointer",
              border: selected ? "2px solid #BCB4DD" : "1px solid #F5EAE1",
              borderRadius: "16px",
              boxSizing: "border-box",
              transition: "border-color 150ms ease",
              WebkitTapHighlightColor: "transparent",

              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": {
                  borderColor: "#BCB4DD",
                },
              },

              "&:focus-visible": {
                outline: "2px solid #BCB4DD",
                outlineOffset: "3px",
              },
            }}
          >
            <Box
              sx={{
                p: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                height: "100%",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 12,
                  color: "#361D00",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {option.flavour.name}
              </Typography>

              <Typography
                component="span"
                sx={{
                  color: "#361D00",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.5px",
                }}
              >
                {option.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default SingleSelectCardList;
