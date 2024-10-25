// ./app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth";  // Ensure this path is correct

// Change runtime from 'edge' to 'nodejs'
export const runtime = 'nodejs';

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
