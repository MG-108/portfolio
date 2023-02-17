import sanityCLient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityCLient({
  projectId: "2bxkymln",
  dataset: "production",
  apiVersion: "2023-02-12",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_STUDIO_TOKEN,
});

//to render images
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
