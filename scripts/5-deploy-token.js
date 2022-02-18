import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x7925256b18eEf1320a96dFA7317B72D7E681f30A");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      name: "AsukaDAO Governance Token",
      symbol: "BAKA",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();