"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import benCarson from "public/9.jpg";
import Button from "@/components/button/Button";
import aboutImage from "/public/3.jpg";
import DOMPurify from "dompurify";
import DisplayContent from "@/components/DisplayContent";

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

  const sanitizedContent = DOMPurify.sanitize(book?.information, {
    USE_PROFILES: { html: true },
  });

  return (
    <section className="w-full md:min-h-[70vh]">
      <div className=" relative w-full mb-3 lg:mb-5 bg-gradient-to-br from-primary-100 to-[#3C2A21]  h-[250px]">
        <Image
          src={aboutImage}
          className="h-full w-full opacity-[70%] grayscale-[60%] mix-blend-overlay object-cover"
          alt="about"
        />

        <div className="  px-6 py-2 absolute bottom-[80px] rounded-lg left-[30px] md:left-[60px] lg:left-[100px]">
          <p className="text-lg md:text-2xl lg:text-3xl text-white font-semibold tracking-widest">
            Explore Novels and Books
          </p>
        </div>
      </div>
      {isLoading ? (
        <div className="flex w-5/6  mx-auto py-14 md:py-8 md:pb-14 justify-start items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-5/6 lg:w-4/6  mx-auto py-14 md:py-8 md:pb-14">
          {/* top section */}

          <div className="">
            {/* right section */}
            <div className="w-full md:w-[50%]">
              <Image
                src={book.image ? book?.image : benCarson}
                className="h-[250px] lg:h-[300px] w-full rounded-md  object-cover"
                alt="image"
              />
            </div>
          </div>

          <div className="my-5">
            <h1 className="text-2xl tracking-widest font-semibold">
              {book?.title}
            </h1>
            <p className="text-sm mt-1">{`#${book?.tags.split(" ,")}`}</p>
          </div>
          {/* bottom section */}
          {/* blog info */}
          <div className="">
            <div className="text-sm text-justify leading-[18px]">
              <DisplayContent htmlContent={sanitizedContent} />
            </div>
          </div>

          <div className="mt-8">
            <Button text={"Back to Blogs"} url={"/blogs"} />
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
