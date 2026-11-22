import PageContainer from "@/app/components/PageContainer";
import { Flavour } from "@/app/types";
import { createClient } from "@/lib/supabase/server";

export default async function Vote() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>();

  return (
    <PageContainer showBreadCrumbs>
      <></>
    </PageContainer>
  );
}
