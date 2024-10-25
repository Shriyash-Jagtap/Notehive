import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth";  // Adjust this import based on your project structure
export const runtime = 'edge';

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
