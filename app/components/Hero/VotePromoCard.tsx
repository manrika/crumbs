"use client";

import Button from "@/app/components/Button";
import { Box, Typography } from "@mui/material";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const VotePromoCard: React.FC = () => {
  const onPress = () => {
    window.open(
      "https://www.instagram.com/crumbs.ldn/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "320px",
        width: "320px",
        minHeight: "480px",
        height: "480px",
        borderRadius: "24px",
        overflow: "hidden",
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#BCB4DD",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            mt: "32px",
            gap: 1,
            display: "flex",
            flexDirection: "column",
            mb: "6px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 24,
              color: "#361D00",
              letterSpacing: "8%",
              textTransform: "uppercase",
              lineHeight: 1.2,
              px: "42px",
              textAlign: "center",
            }}
          >
            2026 Crumbies
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 10,
              color: "#361D00",
              letterSpacing: "8%",
              textAlign: "center",
            }}
          >
            Every cookie deserves it’s moment.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "180px",
            height: "150px",
            alignSelf: "center",
          }}
        >
          {/* Trophy */}
          <EmojiEventsRoundedIcon
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "156px",
              color: "#fdb329",
            }}
          />

          {/* Cookie - mid/bottom left */}
          <CookieRoundedIcon
            sx={{
              position: "absolute",
              left: 0,
              bottom: 18,
              fontSize: "24px",
              color: "#361D00",
              transform: "rotate(-40deg)",
              zIndex: 2,
            }}
          />
          <CookieRoundedIcon
            sx={{
              position: "absolute",
              left: 21,
              bottom: -4,
              fontSize: "24px",
              color: "#361D00",
              transform: "rotate(120deg)",
              zIndex: 2,
            }}
          />
          <CookieRoundedIcon
            sx={{
              position: "absolute",
              left: 24,
              bottom: 20,
              fontSize: "24px",
              color: "#361D00",
              zIndex: 2,
            }}
          />

          {/* Sparkle - top right */}
          <AutoAwesomeRoundedIcon
            sx={{
              position: "absolute",
              right: 10,
              top: -2,
              fontSize: "24px",
              zIndex: 2,
              color: "#fff",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            sx={{
              mt: "32px",
              gap: 0.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#361D00",
                letterSpacing: "8%",
                textTransform: "uppercase",
                lineHeight: 1.2,
                px: "12px",
                textAlign: "center",
              }}
            >
              Your vote. Your favourite.
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#361D00",
                letterSpacing: "8%",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Win a box of cookies.
            </Typography>
          </Box>
          <Button label="Vote now" onPress={onPress} />
        </Box>
      </Box>
    </Box>
  );
};

export default VotePromoCard;
