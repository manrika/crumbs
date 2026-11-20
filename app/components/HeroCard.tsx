import { Box, Typography } from "@mui/material";

export type HeroCardProps = {
  title: string;
  description: string;
};

const HeroCard: React.FC<HeroCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        minWidth: "320px",
        width: "320px",
        minHeight: "480px",
        height: "480px",
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
            fontSize: 20,
            color: "#361D00",
            letterSpacing: "8%",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            color: "#361D00",
            letterSpacing: "8%",
            textTransform: "uppercase",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroCard;
