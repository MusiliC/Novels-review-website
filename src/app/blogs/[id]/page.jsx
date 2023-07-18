"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import benCarson from "public/2.jpg";

const page = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [book, setBook] = useState({
    title: "",
    information: "",
    tags: "",
    image: "",
  });

  useEffect(() => {
    const getBlogDetails = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/blogs/${id}`);

        const data = await response.json();

        setBook({
          title: data.title,
          information: data.information,
          tags: data.tags,
          image: data?.image,
        });
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    if (id) getBlogDetails();
  }, [id]);

  return (
    <section className="w-full md:min-h-[70vh]">
      {isLoading ? (
        <div className="flex w-5/6 lg:w-4/6 mx-auto py-14 md:py-8 md:pb-14 justify-start items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-5/6 lg:w-4/6 mx-auto py-14 md:py-8 md:pb-14">
          {/* top section */}

          <div className="">
            {/* right section */}
            <div className="w-full md:w-[50%]">
              <Image
                src={book.image ? book?.image : benCarson}
                className="h-[250px] md:h-[350px] w-full rounded-md  object-cover"
                alt="image"
              />
            </div>
          </div>

          <div className="my-5">
            <h1 className="text-2xl tracking-widest font-semibold">
              {book?.title}
            </h1>
            <p className="text-sm mt-1">{`#${book?.tags.split(' ,')}`}</p>
          </div>
          {/* bottom section */}
          {/* blog info */}
          <div className="">
            <p className="text-sm leading-[18px]">{book?.information}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
