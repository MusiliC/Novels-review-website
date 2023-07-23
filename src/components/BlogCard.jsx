import Link from "next/link";
import React from "react";
import Image from "next/image";
import benCarson from "public/12.jpg";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DOMPurify from "dompurify";
import DisplayContent from "./DisplayContent";

const BlogCard = ({ blog, handleTagClick }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleProfileClick = () => {
    if (blog.creator._id === session?.user.id) return router.push("/dashboard");
    router.push(`/dashboard/${blog.creator._id}?name=${blog.creator.username}`);
  };

  let blogDescription = blog.information.trim().split(/\s+/);
  const shortDescription = blogDescription.slice(0, 10).join(" ");

  const sanitizedContent = DOMPurify.sanitize(shortDescription, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 border-t border-b  py-5 border-gray-300 md:gap-[30px] lg:gap-[70px]">
      <div className="md:w-[40%] px-2 lg:w-[30%] flex justify-center">
        <Image
          src={blog.image ? blog.image : benCarson}
          className="h-[180px] md:h-[150px] w-full rounded-md  object-cover"
          alt="image"
        />
      </div>

      {/* item 2 */}

      <div className="flex md:w-[55%] lg:w-[65%] flex-col">
        <div className="flex my-3 justify-between gap-7 md:gap-2 flex-col md:flex-row  md:items-center">
          {/* username */}

          <div
            className="flex-1 flex justify-start items-center gap-3 hover:bg-gray-200  cursor-pointer"
            onClick={handleProfileClick}
          >
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

          {/* read more button */}

          <div className="flex-1  mb-3 md:mb-0  md:flex md:justify-end">
            <Link href={`/blogs/${blog._id}`}>
              <p className="text-blue-700 tracking-widest text-sm font-semibold underline">
                Read more
              </p>
            </Link>
          </div>
        </div>
        {/* title */}
        <div className="mb-2">
          <p className="font-semibold tracking-wider">{blog.title}</p>
        </div>
        <div className=" mb-2">
          <div className="text-sm flex">
            <DisplayContent htmlContent={sanitizedContent} />
            <span className="font-semibold tracking-wider">.....</span>
          </div>
        </div>
        <div className="">
          <p
            className="text-sm italic"
            onClick={() => handleTagClick && handleTagClick(blog.tags)}
          >{`#${blog.tags}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
