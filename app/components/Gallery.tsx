import Carousel from "@/app/components/Carousel";
import { createClient } from "@/lib/supabase/server";
import { Box } from "@mui/material";

const Gallery: React.FC = async () => {
  const supabase = await createClient();

  const { data: files, error } = await supabase.storage
    .from("gallery")
    .list("", {
      limit: 100,
      sortBy: { column: "name", order: "asc" },
    });

  const images = (files ?? [])
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .map((file) => ({
      name: file.name,
      url: supabase.storage.from("gallery").getPublicUrl(file.name).data
        .publicUrl,
    }));

  console.log("files");
  console.log(files);

  console.log("Gallery error:", error);

  return (
    <Carousel title="Crumbs ldn club">
      {images.map((image) => (
        <Box
          key={image.name}
          component="img"
          src={image.url}
          alt="CRUMBS LDN cookies"
          sx={{
            minWidth: "200px",
            width: "200px",
            minHeight: "240px",
            height: "240px",
            display: "block",
            borderRadius: "24px",
          }}
        />
      ))}
    </Carousel>
  );
};

export default Gallery;
