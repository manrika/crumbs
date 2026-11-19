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
      variant="contained"
      sx={{
        borderRadius: 32,
        paddingY: 1.5,
        width: "100%",
        backgroundColor: "#361D00",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        "&.Mui-disabled": {
          backgroundColor: "#D8D0C7",
          color: "#756A60",
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
