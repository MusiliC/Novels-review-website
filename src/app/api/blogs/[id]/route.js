import Book from "@/models/book";
import { connectToDB } from "@/utilis/database";

//get - read blog

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const blogs = await Book.findById(params.id).populate("creator");

    if (!blogs) return new Response("Blog not found", { status: 404 });

    return new Response(JSON.stringify(blogs), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch articles", {
      status: 500,
    });
  }
};

//patch - update

export const PATCH = async (req, { params }) => {
  const { title, information, tags, image } = await req.json();

  try {
    await connectToDB();

    const existingBlog = await Book.findById(params.id);

    if (!existingBlog) return new Response("Blog not found", { status: 404 });

    existingBlog.title = title;
    existingBlog.information = information;
    existingBlog.tags = tags;
    existingBlog.image = image;

    await existingBlog.save();

    return new Response(JSON.stringify(existingBlog), { status: 200 });
  } catch (error) {
    return new Response("Failed to update article", {
      status: 500,
    });
  }
};

//delete - delete

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Book.findByIdAndRemove(params.id);

    return new Response("Article deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete article", { status: 500 });
  }
};
