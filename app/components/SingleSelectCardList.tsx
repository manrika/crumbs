import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";

type SelectCardOption = {
  value: string;
  title: string;
  description: string;
};

type SingleSelectCardListProps = {
  options: SelectCardOption[];
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
          const selected = selectedValue === option.value;

          return (
            <Box
              key={option.value}
              sx={{
                border: "2px solid",
                borderColor: selected ? "#361D00" : "#F5EAE1",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border-color 150ms ease",
                "&:hover": {
                  borderColor: "#361D00",
                },
              }}
            >
              <FormControlLabel
                value={option.value}
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
                        fontSize: 14,
                        color: "#361D00",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {option.title}
                    </Typography>

                    <Typography
                      component="div"
                      sx={{
                        color: "#361D00",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: 12,
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
