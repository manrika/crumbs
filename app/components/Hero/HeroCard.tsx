"use client";

import Button from "@/app/components/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type HeroCardProps = {
  title: string;
  description: string;
  image: string;
};

const HeroCard: React.FC<HeroCardProps> = ({ title, description, image }) => {
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
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
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
        <Box>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 32,
              color: "#fff",
              letterSpacing: "8%",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "#fff",
              letterSpacing: "8%",
              textTransform: "uppercase",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Button variant="outlined" label="Order now" onPress={onPress} />
      </Box>
    </Box>
  );
};

export default HeroCard;
