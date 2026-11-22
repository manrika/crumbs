import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

type InputProps = {
  label: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  id?: string;
  autoComplete?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  defaultValue,
  onChange,
  required = false,
  disabled = false,
  error = false,
  helperText,
  id,
  autoComplete,
}: InputProps) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Typography
        component="label"
        htmlFor={inputId}
        sx={{
          color: "#3D2008",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </Typography>

      <TextField
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        disabled={disabled}
        error={error}
        helperText={helperText}
        autoComplete={autoComplete}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "56px",
            borderRadius: "10px",
            color: "#3D2008",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.5px",

            "& fieldset": {
              border: "1px solid #F4E9E0",
            },

            "&:hover fieldset": {
              borderColor: "#E8D5C6",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#3D2008",
              borderWidth: "1px",
            },

            "&.Mui-error fieldset": {
              borderColor: "error.main",
            },

            "&.Mui-disabled": {
              backgroundColor: "#F5EEE8",
            },
          },

          "& .MuiOutlinedInput-input": {
            "&::placeholder": {
              color: "#C9AD92",
              opacity: 1,
            },
          },

          "& .MuiFormHelperText-root": {
            marginLeft: 0,
          },
        }}
      />
    </Box>
  );
};

export default Input;
