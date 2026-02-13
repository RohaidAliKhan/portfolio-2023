import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "pya9aix9",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
