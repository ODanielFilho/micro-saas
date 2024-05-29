import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import nodemailer from "next-auth/providers/nodemailer";
import { prisma } from "../database";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/app",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});
