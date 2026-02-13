import { client } from "./sanityClient";

export async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      services,
      tools,
      "imageUrl": image.asset->url,
      link
    }
  `);
}
