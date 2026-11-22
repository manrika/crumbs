import { PAGE_MARGIN } from "@/app/components/PageContainer";
import { Box, Typography } from "@mui/material";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Carousel: React.FC<Props> = ({ title, children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {title && (
        <Typography
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
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          mr: `-${PAGE_MARGIN}`,
          pr: PAGE_MARGIN,
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
        {children}
      </Box>
    </Box>
  );
};

export default Carousel;
