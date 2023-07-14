import Image from "next/image";
import React from "react";
import benCarson from "public/2.jpg";
import Search from "@/components/search/Search";

const page = () => {
  const blogs = [
    {
      image: benCarson,
      title: "Take the risk",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore maiores sit quia est dignissimos animi vero saepe id excepturi?",
      tags: "success",
    },
    {
      image: benCarson,
      title: "Take the risk",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore maiores sit quia est dignissimos animi vero saepe id excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "success",
    },
  ];

  return (
    <section className="w-full pt-5 pb-16">

      <div className="w-5/6 mx-auto pb-10">
        <Search/>
      </div>

      <div className="w-5/6 mx-auto flex flex-col">
        {blogs.map((blog, i) => (
          <div
            className="flex flex-col md:flex-row gap-4 border-t border-b  py-6 border-gray-300 md:gap-[30px] lg:gap-[70px]"
            key={i}
          >
            <div className="md:w-[40%] lg:w-[30%] flex justify-center">
              <Image
                src={blog.image}
                className="h-[160px] w-full rounded-md  object-cover"
                alt="image"
              />
            </div>

            {/* item 2 */}

            <div className="flex md:w-[55%] lg:w-[65%] flex-col">
              <div className="flex  justify-center gap-2 flex-col items-start">
                {/* username */}
                <div>
                  <p className="text-sm">User name</p>
                </div>
                {/* title */}
                <div>
                  <p className="font-semibold md:text-lg tracking-wider">
                    {blog.title}
                  </p>
                </div>
              </div>
              <div className="my-3 mb-5">
                <p className="text-sm">{blog.info}</p>
              </div>
              <div className="">
                <p className="text-sm italic">{`#${blog.tags}`}</p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
