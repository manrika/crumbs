import { createClient } from "@/lib/supabase/server";

type Flavour = {
  name: string;
  description: string;
  category: string;
};

export default async function Cookies() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("flavours")
    .select("*")
    .overrideTypes<Flavour[]>()

  if (error) {
    return <p>Database error: {error.message}</p>;
  }

  return (
    <main>
      <h1>Crumbs flavours 🍪</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
