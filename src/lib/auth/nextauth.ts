import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../prisma";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          throw new Error("No user found with the given email");
        }
        if (credentials.password !== user.password) {
          throw new Error("Password doesn't match");
        }
        return user;
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.SECRET
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout"
  }
});
