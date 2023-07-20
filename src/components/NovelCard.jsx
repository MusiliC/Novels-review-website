"use client"
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const NovelCard = ({ data }) => {

const [selectedBook, setSelectedBook] = useState()

console.log(selectedBook);

  return (
    <div className="w-5/6 md:w-[94%] lg:w-[87%] mx-auto py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
      {data.map((item, i) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let bookTitle = item.volumeInfo.title.trim().split(/\s+/);
        const shortTitle = bookTitle.slice(0, 8).join(" ");

        let subBookTitle = item.volumeInfo.description?.trim().split(/\s+/);
        const shortSubBookTitle = subBookTitle
          ?.slice(0, 8)
          .join(" ")
          .toLowerCase();

        if (thumbnail != undefined && subBookTitle != undefined) {
          return (
            <div
              className="flex w-full my-2 md:my-0 border md:w-[350px] hover:bg-gray-200 hover:transform hover:scale-105 rounded-md  h-[230px]  gap-6"
              key={i}
            >
              <div className="w-[45%] md:w-[52%]">
                <Image
                  src={thumbnail}
                  className="w-full h-full object-cover rounded-l-md"
                  width={100}
                  height={100}
                  alt="novel image"
                />
              </div>
              <div
                className="w-[55%] md:w-[60%]  flex flex-col cursor-pointer items-center  justify-around gap-2 py-2"
                onClick={() => setSelectedBook(item)}
               
              >
                <p className="mb-3 font-semibold tracking-wider text-sm md:text-base">
                  {shortTitle}
                </p>
                <p className="text-sm">
                  {shortSubBookTitle}{" "}
                  <span className="font-semibold">....</span>{" "}
                </p>
                <p className="text-sm p-2.5 w-fit bg-yellow-200 rounded-md text-center">
                  Read more
                </p>
              </div>
            </div>
          );
        }
      })}

      {/* <Modal/> */}
    </div>
  );
};

export default NovelCard;
