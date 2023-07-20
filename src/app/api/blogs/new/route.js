import Book from "@/models/book";
import { connectToDB } from "@/utilis/database";


export const POST = async (req, res) => {
  const { userId, title, image, information, tags } = await req.json();

  try {
    await connectToDB();

    const newBook = new Book({
      creator: userId,
      title,
      image,
      information,
      tags,
    });

    await newBook.save();

    return new Response(JSON.stringify(newBook), {
      status: 201,
    });
  } catch (error) {
      return new Response("Failed to create new blog", {
        status: 500,
      });
  }
};
