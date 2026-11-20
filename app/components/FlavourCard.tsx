import { Flavour } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = Flavour;

const FlavourCard: React.FC<Props> = ({ name, description, image_url }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "260px",
        width: "260px",
        minHeight: "342px",
        height: "342px",
        borderRadius: "24px",
        overflow: "hidden",
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {image_url && (
        <Image
          src={image_url}
          alt={name}
          fill
          sizes="260px"
          style={{ objectFit: "cover" }}
        />
      )}

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

      {/* Flavour text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: "16px",
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
          {name}
        </Typography>

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
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlavourCard;
