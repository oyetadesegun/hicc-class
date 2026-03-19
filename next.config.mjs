/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Add this if you're using static export
  // output: 'export',  // Uncomment if you need static HTML export
  
  // Or add this for standard server deployment
  // (no need for rewrites in Next.js)
}

export default nextConfig