"use client";
import { Button as MUIButton } from "@mui/material";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "outlined" | "filled";
};

const Button: React.FC<Props> = ({ label, onPress, variant = "filled" }) => {
  "use client";

  const isOutlined = variant === "outlined";

  return (
    <MUIButton
      variant={isOutlined ? "outlined" : "contained"}
      sx={{
        borderRadius: 32,
        paddingY: 1.5,
        width: "100%",
        border: isOutlined ? "1.5px solid rgba(255, 255, 255, 0.8)" : undefined,
        backgroundColor: isOutlined ? "transparent" : "#361D00",
        color: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        transition: "all 200ms ease",

        "&:hover": {
          backgroundColor: isOutlined
            ? "rgba(188, 180, 221, 0.45)"
            : "rgba(54, 29, 0, 0.7)",
          borderColor: isOutlined ? "#FFFFFF" : undefined,
        },

        "&.Mui-disabled": {
          backgroundColor: "rgba(216, 208, 199, 0.25)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          color: "rgba(255, 255, 255, 0.5)",
          cursor: "not-allowed",
        },
      }}
      onClick={onPress}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
