import { formatDate } from "@/app/helpers/formatDate";
import { PopUp } from "@/app/types";
import { Box, Typography } from "@mui/material";

type Props = {
  pastEvent?: boolean;
} & PopUp;

const PopUpCard: React.FC<Props> = ({
  name,
  address,
  date,
  start_time,
  end_time,
  pastEvent,
}) => {
  const eventDate = {
    date,
    start_time,
    end_time,
  };

  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "324px",
        width: "324px",
        minHeight: "169px",
        height: "169px",
        borderRadius: "24px",
        overflow: "hidden",
        flexShrink: 0,
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderColor: "#BCB4DD",
        borderWidth: "2px",
        borderStyle: "solid",
        opacity: pastEvent ? 0.6 : 1,
        backgroundColor: "#FEF8F5",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 16,
          color: "#361D00",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          display: "flex",
          px: "20px",
          pt: "20px",
          pb: "16px",
        }}
      >
        {formatDate(eventDate)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          backgroundColor: "#BCB4DD",
          flexGrow: 1,
          px: "20px",
          pb: "20px",
          pt: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
              fontWeight: 600,
              fontSize: 12,
              color: "#FFFFFF",
              letterSpacing: "0.5px",
            }}
          >
            {address}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PopUpCard;
