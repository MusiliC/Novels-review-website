import Image from "next/image";
import React from "react";
import benCarson from "public/2.jpg";

const page = () => {
  const blogs = [
    {
      image: benCarson,
      title: "Take the risk",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore maiores sit quia est dignissimos animi vero saepe id excepturi?",
    },
  ];

  return (
    <section className="w-full pt-10 pb-16">
      <div className="w-5/6 mx-auto flex flex-col">
        {blogs.map((blog, i) => (
          <div className="flex flex-col md:flex-row gap-4 md:gap-[50px]" key={i}>
            <div className="flex-1">
              <Image
                src={blog.image}
                className="h-[200px] object-cover"
                alt="image"
              />
            </div>

            {/* item 2 */}

            <div className="flex flex-1 flex-col">
              <div className="flex mb-5 justify-between items-center">
                <div>
                  <p>{blog.title}</p>
                </div>
                <div>
                  <p className="">User name</p>
                </div>
              </div>
              <div>
                <p className="text-sm">{blog.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
