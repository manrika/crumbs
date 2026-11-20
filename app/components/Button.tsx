"use client";
import { Button as MUIButton } from "@mui/material";

type Props = {
  label: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ label, onPress }) => {
  "use client";

  return (
    <MUIButton
      variant="outlined"
      sx={{
        borderRadius: 32,
        paddingY: 1.5,
        width: "100%",
        border: "1.5px solid rgba(255, 255, 255, 0.8)",
        color: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        transition: "all 200ms ease",

        "&:hover": {
          backgroundColor: "rgba(188, 180, 221, 0.45)",
          borderColor: "#FFFFFF",
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
