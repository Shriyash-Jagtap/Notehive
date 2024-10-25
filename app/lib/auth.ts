import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const runtime = 'edge';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",  // Provide default empty string if undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",  // Provide default empty string if undefined
    }),
  ],
  // Add other NextAuth options as needed
};
