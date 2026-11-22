"use client";

import Button from "@/app/components/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { useRouter } from "next/navigation";

const VotePromoCard: React.FC = () => {
  const router = useRouter();

  const onPress = () => {
    router.push("/vote");
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
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/crumbies_red_carpet_light.png"
        alt="yadda"
        fill
        sizes="320px"
        style={{
          objectFit: "cover",
        }}
      />

      {/* Dark gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 35%, transparent 65%)",
          zIndex: 1,
        }}
      />

      {/* Text on top of image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            color: "#fff",
            letterSpacing: "8%",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Vote for your favourite for a chance to{" "}
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            win
          </Box>{" "}
          a box of cookies!
        </Typography>
        <Button variant="outlined" label="Vote now" onPress={onPress} />
      </Box>
    </Box>
  );
};

export default VotePromoCard;
