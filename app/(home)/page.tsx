import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

import VotingForm from "@/app/(home)/components/VotingForm";
import { Box } from "@mui/material";
import { Flavour } from "@/app/types";
import FlavoursCarousel from "@/app/components/FlavoursCarousel";
import CrumbsLogo from "@/app/components/CrumbsLogo";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

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
    <Box sx={{ backgroundColor: "#FEF8F5", px: "18px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          py: "32px",
          alignItems: "center",
        }}
      >
        <CrumbsLogo />
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
