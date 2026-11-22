import Carousel from "@/app/components/Carousel";
import PopUpCard from "@/app/components/PopUps/PopUpCard";
import { PopUp } from "@/app/types";
import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";

type Props = {
  popUps: PopUp[];
};

const PopUpCarousel: React.FC<Props> = ({ popUps }) => {
  const today = dayjs();

  const upcomingPopUps = popUps
    .filter((popUp) => !dayjs(popUp.date).isBefore(today, "day"))
    .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

  const pastPopUps = popUps
    .filter((popUp) => dayjs(popUp.date).isBefore(today, "day"))
    .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  return (
    <Carousel title="Pop-ups">
      {upcomingPopUps.map((popUp) => (
        <PopUpCard key={`popUp-${popUp.id}`} {...popUp} />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "4px",
          pl: "8px",
        }}
      >
        <Divider
          orientation="horizontal"
          sx={{
            backgroundColor: "rgba(54, 29, 0, 0.5)",
            height: "100%",
            width: "1px",
            mt: "8px",
            display: "flex",
          }}
        />
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
          Past Events
        </Typography>
      </Box>
      {pastPopUps.map((popUp) => (
        <PopUpCard key={`popUp-${popUp.id}`} {...popUp} pastEvent />
      ))}
    </Carousel>
  );
};

export default PopUpCarousel;
