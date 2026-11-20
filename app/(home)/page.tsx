import { createClient } from "@/lib/supabase/server";

import VotingForm from "@/app/(home)/components/VotingForm";
import { Box } from "@mui/material";
import { Flavour } from "@/app/types";
import FlavoursCarousel from "@/app/components/FlavoursCarousel";
import CrumbsLogo from "@/app/components/CrumbsLogo";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import HeroCarousel from "@/app/components/HeroCarousel";
import Tagline from "@/app/components/Tagline";
import AnnouncementTicker from "@/app/components/AnnouncementTicker";

const heroItems = [
  { title: "Treat yourself", description: "New York style fudgy cookies" },
  { title: "Send some sweetness", description: "Cookies made for gifting" },
  {
    title: "Mark the moment",
    description: "Personalised for your special day",
  },
];

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>();

  console.log("data", data);
  console.log("error", error);

  const classicFlavours = data?.filter(
    (flavour) => flavour.category === "classic",
  );
  const seasonalFlavours = data?.filter(
    (flavour) => flavour.category === "seasonal",
  );

  return (
    <Box
      sx={{
        backgroundColor: "#FEF8F5",
        px: "18px",
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
      </Box>
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
        <Footer />
      </Box>
      {/* <VotingForm flavours={data || []} /> */}
    </Box>
  );
}
