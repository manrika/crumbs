import { Box, Typography } from "@mui/material";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const messages = [
  {
    text: "UK delivery",
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    text: "East London/Cuffley collection",
    icon: <StorefrontOutlinedIcon />,
  },
  {
    text: "Order now, dm us",
    icon: <CookieOutlinedIcon />,
  },
  {
    //   text: "Made with love",
    //   icon: <FavoriteBorderIcon />,
    // },
    // {
    //   text: "Personalised treat",
    //   icon: <CakeOutlinedIcon />,
  },
];

const AnnouncementTicker = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "calc(100% + 36px)",
          sm: "calc(100% + 48px)",
          md: "calc(100% + 96px)",
          lg: "calc(100% + 160px)",
          xl: "calc(100% + 240px)",
        },
        overflow: "hidden",
        backgroundColor: "#BCB4DD",
        color: "#fff",
        py: "14px",
        mx: {
          xs: "-18px",
          sm: "-24px",
          md: "-48px",
          lg: "-80px",
          xl: "-120px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "ticker 25s linear infinite",
          "@keyframes ticker": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        {[0, 1].map((copy) => (
          <Box
            key={copy}
            aria-hidden={copy === 1}
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              gap: 5,
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {message.icon}
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "8%",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {message.text}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AnnouncementTicker;
