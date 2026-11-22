import Carousel from "@/app/components/Carousel";
import ReviewCard from "@/app/components/Reviews/Reviewcard";
import { Review } from "@/app/types";
import { Box, Typography } from "@mui/material";

type Props = {
  reviews: Review[];
};

const ReviewCarousel: React.FC<Props> = ({ reviews }) => {
  return (
    <Carousel title="Thank you">
      {reviews.map((review) => (
        <ReviewCard key={`review-${review.id}`} {...review} />
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
