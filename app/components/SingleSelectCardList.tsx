import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Flavour } from "@/app/types";

type SingleSelectCardListProps = {
  options: Flavour[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
};

const SingleSelectCardList: React.FC<SingleSelectCardListProps> = ({
  options,
  value,
  onChange,
  name = "single-select-card-list",
}) => {
  const [internalValue, setInternalValue] = React.useState("");

  const selectedValue = value ?? internalValue;
  const isControlled = value !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  };

  return (
    <FormControl fullWidth>
      <RadioGroup
        name={name}
        value={selectedValue}
        onChange={handleChange}
        aria-label={name}
        sx={{ gap: "8px" }}
      >
        {options.map((option) => {
          const selected = selectedValue === option.id;

          return (
            <Box
              key={option.id}
              sx={{
                borderWidth: selected ? "2px" : "1px",
                borderColor: selected ? "#BCB4DD" : "#F5EAE1",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border-color 150ms ease",
                "&:hover": {
                  borderColor: "#BCB4DD",
                },
              }}
            >
              <FormControlLabel
                value={option.id}
                control={
                  <Radio
                    sx={{
                      position: "absolute",
                      width: 1,
                      height: 1,
                      opacity: 0,
                      pointerEvents: "none",
                    }}
                  />
                }
                label={
                  <Box
                    sx={{
                      width: "100%",
                      boxSizing: "border-box",
                      p: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: 12,
                        color: "#361D00",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {option.name}
                    </Typography>

                    <Typography
                      component="div"
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
                }
                sx={{
                  m: 0,
                  width: "100%",
                  minHeight: 0,
                  cursor: "pointer",
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            </Box>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default SingleSelectCardList;
