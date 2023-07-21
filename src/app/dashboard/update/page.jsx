"use client";
import Form from "@/components/form/Form";
import React, { useEffect, useState } from "react";
import contact from "public/noteBook.svg";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    information: "",
    tags: "",
    image: "",
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const blogId = searchParams.get("id");

  useEffect(() => {
    const getBlogDetails = async () => {
      const response = await fetch(`/api/blogs/${blogId}`);

      const data = await response.json();

      setBook({
        title: data.title,
        information: data.information,
        tags: data.tags,
        image: data?.image,
      });
    };

    if (blogId) getBlogDetails();
  }, [blogId]);

  const updateBook = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!blogId) return alert("Blog not found");

    try {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: "PATCH",
        body: JSON.stringify({
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
      <div className="w-5/6 lg:w-5/6 md:w-4/6 mx-auto flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl tracking-widest font-bold">
            Update Blog
          </h1>
          <h3 className=" lg:text-lg my-2 tracking-wider">
            Edit and share amazing article blogs with the world
          </h3>
        </div>

        {/* form */}

        <div className="w-full items-center lg:py-4 justify-between flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex-1 w-full">
            <Form
              type={"Update"}
              book={book}
              setBook={setBook}
              submitting={submitting}
              handleSubmit={updateBook}
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

export default page;
