import { createClient } from "@/lib/supabase/server";

import VotingForm from "@/app/(home)/components/VotingForm";
import { Box } from "@mui/material";
import { Flavour, Review } from "@/app/types";
import FlavoursCarousel from "@/app/components/Flavours/FlavoursCarousel";
import CrumbsLogo from "@/app/components/CrumbsLogo";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import HeroCarousel from "@/app/components/Hero/HeroCarousel";
import Tagline from "@/app/components/Tagline";
import AnnouncementTicker from "@/app/components/AnnouncementTicker";
import ReviewCarousel from "@/app/components/Reviews/ReviewCarousel";

export const PAGE_MARGIN = "18px";

const heroItems = [
  {
    title: "Treat yourself",
    description: "New York style fudgy cookies",
    image: "/images/cookie_sunshine_shot.jpg",
  },
  {
    title: "Send some sweetness",
    description: "Cookies made for gifting",
    image: "/images/classic_box.jpg",
  },
  {
    title: "Mark the moment",
    description: "Personalised for your special day",
    image: "/images/personalised_hen.jpg",
  },
];

export default async function Home() {
  const supabase = await createClient();

  const { data: flavoursData } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>();

  const { data: reviewsData } = await supabase
    .from("reviews")
    .select("*")
    .overrideTypes<Review[]>();

  const classicFlavours = flavoursData?.filter(
    (flavour) => flavour.category === "classic",
  );
  const seasonalFlavours = flavoursData?.filter(
    (flavour) => flavour.category === "seasonal",
  );

  return (
    <Box
      sx={{
        backgroundColor: "#FEF8F5",
        px: PAGE_MARGIN,
        width: "100%",
        overflowX: "clip",
        overscrollBehaviorX: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          py: "24px",
          alignItems: "center",
        }}
      >
        <CrumbsLogo />
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Tagline />
          <HeroCarousel items={heroItems} />
          <AnnouncementTicker />
        </Box>
        <FlavoursCarousel title="Classics" flavours={classicFlavours || []} />
        <FlavoursCarousel title="Seasonals" flavours={seasonalFlavours || []} />
        <ReviewCarousel reviews={reviewsData || []} />
      </Box>
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
        <Footer />
      </Box>
      {/* <VotingForm flavours={data || []} /> */}
    </Box>
  );
}
