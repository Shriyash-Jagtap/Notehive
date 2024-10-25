import { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',  // Ensures the app can be deployed as a standalone app (if using serverless)
  trailingSlash: true,   // Adds trailing slash to all routes, useful for static exports
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true,       // Uses the Rust-based SWC compiler to minify code
 
};

export default config;
