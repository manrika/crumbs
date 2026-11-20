import ReviewCard from "@/app/components/Reviews/Reviewcard";
import { Review } from "@/app/types";
import { Box, Typography } from "@mui/material";

type Props = {
  reviews: Review[];
};

const ReviewCarousel: React.FC<Props> = ({ reviews }) => {
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
        Thank you
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
        {reviews.map((review) => (
          <ReviewCard key={`review-${review.id}`} {...review} />
        ))}
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
