import { Box, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Tagline: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "8%",
          textTransform: "uppercase",
          color: "#361D00",
        }}
      >
        Baked by two sisters in east ldn
      </Typography>
      <FavoriteBorderOutlinedIcon fontSize="small" sx={{ color: "#361D00" }} />
    </Box>
  );
};

export default Tagline;
