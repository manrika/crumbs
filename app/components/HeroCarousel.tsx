import HeroCard, { HeroCardProps } from "@/app/components/HeroCard";
import { Box } from "@mui/material";

type Props = {
  items: HeroCardProps[];
};

const HeroCarousel: React.FC<Props> = ({ items }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        {items.map((item) => (
          <HeroCard key={`hero-${item.title}`} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default HeroCarousel;
