const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    runtime: 'nodejs', // Ensure you're using the nodejs runtime for compatibility with next-auth
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
}

export default nextConfig;
