import React from "react";
import Image from "next/image";
import novelImage from "/public/2.jpg";
import { useSession } from "next-auth/react";

const MyBlogs = ({ data, handleDelete, handleEdit }) => {
  const { data: session } = useSession();

  return (
    <div className="w-5/6 mx-auto flex flex-col gap-10 justify-evenly lg:justify-start  md:gap-6 lg:gap-9 flex-wrap md:flex-row ">
      {data.map((novel, i) => (
        <div
          className="flex flex-col w-full bg-[#EEEEEE] md:w-[300px] lg:w-[350px] rounded-md cursor-pointer  gap-2"
          key={i}
        >
          <div className="h-[200px] md:h-[150px] lg:h-[200px] ">
            <Image
              src={novel.image ? novel.image : novelImage}
              className="w-full h-full object-cover rounded-t-md"
              alt="novel image"
            />
          </div>
          <div className="w-[90%] mx-auto  flex flex-col justify-between gap-2  py-2">
            <p className="mb-2 font-semibold tracking-wider text-sm ">
              {novel.title}
            </p>
            <p className="text-sm text-justify">{novel.information}</p>
            <p className="text-sm italic">{`#${novel.tags}`}</p>

            {session?.user.id === novel.creator._id && (
              <>
                <div className="border border-t-1 border-gray-300 " />

                <div className="flex items-center px-2  justify-around md:justify-between">
                  <div
                    className="py-2"
                    onClick={() => handleEdit && handleEdit(novel)}
                  >
                    <p className="text-blue-700 cursor-pointer font-semibold tracking-wider">
                      Edit
                    </p>
                  </div>
                  <div
                    className="py-2"
                    onClick={() => handleDelete && handleDelete(novel)}
                  >
                    <p className="text-red-500 cursor-pointer font-semibold tracking-wider">
                      Delete
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBlogs;
