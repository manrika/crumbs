import { createClient } from "@/lib/supabase/server";
import { Box } from "@mui/material";
import { Flavour, PopUp, Review } from "@/app/types";
import FlavoursCarousel from "@/app/components/Flavours/FlavoursCarousel";
import Footer from "@/app/components/Footer";
import HeroCarousel from "@/app/components/Hero/HeroCarousel";
import Tagline from "@/app/components/Tagline";
import AnnouncementTicker from "@/app/components/AnnouncementTicker";
import ReviewCarousel from "@/app/components/Reviews/ReviewCarousel";
import PopUpCarousel from "@/app/components/PopUps/PopUpCarousel";
import PageContainer from "@/app/components/PageContainer";

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
    description: "Personalised for your occassions",
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

  const { data: popUpsData } = await supabase
    .from("pop_ups")
    .select("*")
    .overrideTypes<PopUp[]>();

  const classicFlavours = flavoursData?.filter(
    (flavour) => flavour.active && flavour.category === "classic",
  );
  const seasonalFlavours = flavoursData?.filter(
    (flavour) => flavour.active && flavour.category === "seasonal",
  );

  return (
    <PageContainer showNavBar>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Tagline />
          <HeroCarousel items={heroItems} />
          <AnnouncementTicker />
        </Box>
        <Box
          id="flavours"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <FlavoursCarousel title="Classics" flavours={classicFlavours || []} />
          <FlavoursCarousel
            title="Seasonals"
            flavours={seasonalFlavours || []}
          />
        </Box>
        <Box id="pop-ups">
          <PopUpCarousel popUps={popUpsData || []} />
        </Box>
        <ReviewCarousel reviews={reviewsData || []} />
      </Box>
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
        <Footer />
      </Box>
    </PageContainer>
  );
}
