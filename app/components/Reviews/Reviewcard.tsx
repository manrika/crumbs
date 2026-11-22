import { Review } from "@/app/types";
import { Box, Divider, Typography } from "@mui/material";

type Props = Review;

const ReviewCard: React.FC<Props> = ({ review, order_type }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "282px",
        width: "282px",
        minHeight: "169px",
        height: "169px",
        borderRadius: "24px 24px 0 24px",
        overflow: "hidden",
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#BCB4DD",
        p: "20px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 14,
          color: "#FFFFFF",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {`"${review}"`}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Divider
          sx={{
            backgroundColor: "#FFFFFF",
            height: "1px",
            mt: "8px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            color: "#FFFFFF",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {`${order_type} order`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCard;
