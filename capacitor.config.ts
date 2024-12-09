import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "Flirtpool",
  server: {
    // url: "http://localhost:3000",
    url: "https://flirtpool.vercel.app",
    cleartext: true,
  },
  ios: {
    scheme: "Flirtpool",
  },
};

export default config;
