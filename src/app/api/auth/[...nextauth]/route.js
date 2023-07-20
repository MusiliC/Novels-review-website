import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utilis/database";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connectToDB();

        //check if user already exist

        const userExists = await User.findOne({ email: credentials.email });

        if (userExists) {
          //check password

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            userExists.password
          );

          if (isPasswordCorrect) {
            return userExists;
          } else {
            throw new Error("Incorrect credentials");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        //check if user already exist

        const userExists = await User.findOne({ email: profile.email });

        //if not create new user and save to database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
