import Book from "@/models/book";
import { connectToDB } from "@/utilis/database";

export const GET = async (req, {params}) => {
  try {
    await connectToDB();

    const blogs = await Book.find({creator: params.id}).populate("creator");

    return new Response(JSON.stringify(blogs), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch articles", {
      status: 500,
    });
  }
};
