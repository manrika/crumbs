import PageContainer from "@/app/components/PageContainer";
import { Flavour } from "@/app/types";
import VotingForm from "@/app/vote/components/VotingForm";
import { createClient } from "@/lib/supabase/server";
import { Typography } from "@mui/material";

export default async function Vote() {
  const supabase = await createClient();

  const { data: flavoursData } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>();

  return (
    <PageContainer showBreadCrumbs>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "#361D00",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        2026 Crumbies
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: 12,
          color: "#361D00",
          letterSpacing: "0.5px",
        }}
      >
        Help us crown the CRUMBS cookie of 2026 and a chance to win a box of
        cookies on us!
      </Typography>
      <VotingForm flavours={flavoursData || []} />
    </PageContainer>
  );
}
