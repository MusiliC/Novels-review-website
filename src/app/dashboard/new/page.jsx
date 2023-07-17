"use client";

import Form from "@/components/form/Form";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    information: "",
    tags: "",
    image: "",
  });

  const { data: session } = useSession();
  const router = useRouter();

  const createBook = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("api/blogs/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: book.title,
          information: book.information,
          tags: book.tags,
          image: book.image,
        }),
      });

      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="w-full min-h-[70vh] py-10">
      <div className="w-5/6 mx-auto flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl tracking-widest font-bold">
            Create A Blog
          </h1>
          <h3 className=" lg:text-lg my-2 tracking-wider">
            Create and share amazing article blogs with the world
          </h3>
        </div>

        {/* form */}

        <div className="w-full md:w-[60%] lg:w-[50%]">
          <Form
            book={book}
            setBook={setBook}
            submitting={submitting}
            handleSubmit={createBook}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
