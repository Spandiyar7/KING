import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/KING";
const basePath = isGithubPages ? githubPagesBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
