import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6068d9bb8D104619465FBbDe63a379F792C262D2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Spear of Longinus",
        description: "This NFT will give you access to AsukaDAO!",
        image: readFileSync("scripts/assets/longinus.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()