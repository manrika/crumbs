import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "24px",
        py: "16px",
        px: "24px",
        backgroundColor: "#BCB4DD",
      }}
    >
      {/* Instagram */}
      <Link
        href="https://www.instagram.com/crumbs.ldn/"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          alignItems: "center",
          color: "#FFFFFF",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.75,
          },
        }}
      >
        <InstagramIcon fontSize="small" />
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Crumbs.ldn
        </Typography>
      </Link>

      {/* Email */}
      <Link
        href="mailto:crumbs.ldn@gmail.com"
        underline="none"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          alignItems: "center",
          color: "#FFFFFF",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.75,
          },
        }}
      >
        <EmailOutlinedIcon fontSize="small" />
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          crumbs.ldn@gmail.com
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;
