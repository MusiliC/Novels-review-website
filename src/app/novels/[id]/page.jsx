"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [selectedNovel, setSelectedNovel] = useState();

  const { id } = useParams();

  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`
      );

      setSelectedNovel(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [id]);

  const thumbnail = selectedNovel?.volumeInfo.imageLinks.smallThumbnail;

  return (
    <section>
      <div className="w-5/6 mx-auto flex pt-10 pb-4 justify-center items-center  ">
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex md:w-[90%] mx-auto justify-between  items-center py-2 border-b-2">
              <div>
                <p>Book Description</p>
              </div>
            </div>

            {/* image */}
            <div className="flex flex-col  gap-3 md:gap-10 md:items-center md:flex-row md:w-[90%] mx-auto py-3">
              {/* image */}
              <div className="py-3 md:py-0">
                <div className="">
                  <Image
                    src={thumbnail}
                    className=""
                    width={200}
                    height={100}
                    alt="novel image"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <h1 className="text-lg md:text-xl font-semibold tracking-widest">
                  Title: {selectedNovel?.volumeInfo.title}
                </h1>
                <h1 className=" md:text-lg font-semibold tracking-widest">
                  Authors: {selectedNovel?.volumeInfo.authors}
                </h1>
              </div>
            </div>

            {/* title and desc */}

            <div className="md:w-[90%] pt-2  mx-auto">
              <h2 className="text-sm  md:text-base">Description</h2>
              <p className="text-sm my-3">
                {selectedNovel?.volumeInfo.description}
              </p>

              {/*  */}
              <div className="mt-10">
                <Link
                  href={"/novels"}
                  className="py-3 px-5 tracking-wide font-semibold text-sm bg-yellow-200 rounded-md"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
