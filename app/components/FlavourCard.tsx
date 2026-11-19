import { Flavour } from "@/app/types";
import { Box, Typography } from "@mui/material";

type Props = Flavour;

const FlavourCard: React.FC<Props> = ({ name, description }) => {
  return (
    <Box
      sx={{
        minWidth: "260px",
        width: "260px",
        minHeight: "342px",
        height: "342px",
        backgroundColor: "#D9D9D9",
        borderRadius: "24px",
        overflow: "hidden",
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ p: "16px" }}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 14,
            color: "#361D00",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            color: "#361D00",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlavourCard;
