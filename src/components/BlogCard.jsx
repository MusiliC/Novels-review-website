import Link from "next/link";
import React from "react";
import Image from "next/image";
import benCarson from "public/2.jpg";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 border-t border-b cursor-pointer hover:bg-gray-300  py-5 border-gray-300 md:gap-[30px] lg:gap-[70px]">
        <div className="md:w-[40%] px-2 lg:w-[30%] flex justify-center">
          <Image
            src={blog.image ? blog.image : benCarson}
            className="h-[150px] md:h-[140px] w-full rounded-md  object-cover"
            alt="image"
          />
        </div>

        {/* item 2 */}

        <div className="flex md:w-[55%] lg:w-[65%] flex-col">
          <div className="flex   justify-center gap-2 flex-col items-start">
            {/* username */}
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
              <Image
                src={blog.creator?.image}
                alt="user_image"
                width={35}
                height={35}
                className="rounded-full object-contain"
              />

              {/*  */}

              <div className="flex flex-col">
                <h3 className="font-satoshi text-sm text-gray-900">
                  {blog.creator?.username}
                </h3>
                <p className="font-inter text-sm text-gray-500">
                  {blog.creator?.email}
                </p>
              </div>
            </div>

            {/* title */}
            <div className="my-2">
              <p className="font-semibold md:text-lg tracking-wider">
                {blog.title}
              </p>
            </div>
          </div>
          <div className=" mb-2">
            <p className="text-sm">{blog.information}</p>
          </div>
          <div className="">
            <p className="text-sm italic">{`#${blog.tags}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
