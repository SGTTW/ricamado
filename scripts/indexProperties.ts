// scripts/indexProperties.ts
import Typesense from "typesense";
// import { Property } from "@/types";
import propertiesData from "@/data/propertyData";

// Direct Typesense client (no adapter needed)
const client = new Typesense.Client({
  nodes: [
    {
      host:
        process.env.TYPESENSE_HOST || "dkx3i810rtsz4gy9p-1.a1.typesense.net",
      port: 443,
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
  ],
  apiKey: process.env.TYPESENSE_ADMIN_KEY || "VBhI8yqfyxITJ5LFzRiyKL5lNNb6MtDD",
  connectionTimeoutSeconds: 60,
});

async function run() {
  try {
    console.log("🚀 Starting Typesense collection setup...");

    // Check if the collection already exists
    // await client.collections("properties").retrieve();

    // await client.collections("properties").delete();

    // console.log("✅ Collection deleted (if it existed)");

    await client.collections().create({
      name: "properties",
      fields: [
        // { name: "amenities", type: "string[]" },
        { name: "askingPrice", type: "string[]" },
        { name: "description", type: "string" },
        // { name: "documents", type: "string[]" },
        { name: "features", type: "string[]" },
        { name: "id", type: "string" },
        { name: "image", type: "string" },
        { name: "images", type: "string[]" },
        // { name: "landSize", type: "string" },
        { name: "location", type: "string", facet: true },
        { name: "price", type: "string" },
        // { name: "reasonForSale", type: "string" },
        { name: "tags", type: "string[]", facet: true },
        { name: "title", type: "string" },
        { name: "videos", type: "string[]" },
      ],
    });

    console.log("✅ Collection created successfully!");

    await client.collections("properties").documents().import(propertiesData);
    console.log("✅ Data indexed successfully!");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

run();

// npm run index-properties -
