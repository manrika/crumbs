import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "24px",
        py: "16px",
        px: "42px",
        backgroundColor: "#BCB4DD",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        Flavours
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        Pop-ups
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        Order
      </Typography>
    </Box>
  );
};

export default NavBar;
