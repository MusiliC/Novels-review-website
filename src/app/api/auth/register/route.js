import User from "@/models/user";
import { connectToDB } from "@/utilis/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { username, email, password } = await req.json();

  await connectToDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {   

    await newUser.save();

    return new NextResponse("User created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
