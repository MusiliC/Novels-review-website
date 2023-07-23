"use client";
import contact from "public/book.svg";
import Form from "@/components/form/Form";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NewArticle = () => {
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    information: "",
    tags: "",
  });

  const router = useRouter();

  const createBook = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch("/api/blogs/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: book.title,
          information: book.information,
          tags: book.tags,
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
      <div className="md:w-4/6 w-5/6 lg:w-5/6 mx-auto flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl tracking-widest font-bold">
            Create A Blog
          </h1>
          <h3 className=" lg:text-lg my-2 tracking-wider">
            Create and share amazing article blogs with the world
          </h3>
        </div>

        {/* form */}

        <div className="w-full  items-center lg:py-4 justify-between flex flex-col-reverse lg:flex-row gap-5">
          <div className="lg:flex-1 w-full">
            <Form
              type={"Create"}
              book={book}
              setBook={setBook}
              submitting={submitting}
              handleSubmit={createBook}
            />
          </div>

          <div className="my-6 md:my-0 flex flex-1  justify-end">
            <Image
              src={contact}
              alt="Contact"
              className="h-[270px] lg:h-[370px] lg:w-[85%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArticle;
