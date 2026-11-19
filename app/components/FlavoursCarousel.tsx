import FlavourCard from "@/app/components/FlavourCard";
import { Flavour } from "@/app/types";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  flavours: Flavour[];
};

const FlavoursCarousel: React.FC<Props> = ({ title, flavours }) => {
  return (
    <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "#361D00",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          mr: "-36px",
          pr: "36px",
          pb: 2,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Internet Explorer / Edge legacy
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari
          },
        }}
      >
        {flavours.map((flavour) => (
          <FlavourCard key={`flavour-${flavour.id}`} {...flavour} />
        ))}
      </Box>
    </Box>
  );
};

export default FlavoursCarousel;
