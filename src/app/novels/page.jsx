import Search from "@/components/search/Search";
import Image from "next/image";
import React from "react";
import aboutImage from "/public/3.jpg";
import novelImage from "/public/2.jpg";

const page = () => {
  const novels = [
    {
      title: "Nany and the alpha daddy",
      image: novelImage,
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, ipsum dolor sit, amet consectetur perferendis.",
    },
    {
      title: "Nany and the alpha daddy",
      image: novelImage,
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, ipsum dolor sit, amet consectetur perferendis.",
    },
    {
      title: "Nany and the alpha daddy",
      image: novelImage,
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, ipsum dolor sit, amet consectetur perferendis.",
    },
  ];

  return (
    <section className="w-full pt-2 pb-16">
      <div className=" relative w-full  bg-gradient-to-br from-primary-100 to-[#3C2A21]  h-[300px]">
        <Image
          src={aboutImage}
          className="h-full w-full opacity-[70%] grayscale-[60%] mix-blend-overlay object-cover"
          alt="about"
        />

        <div className="  px-6 py-2 absolute bottom-[100px] rounded-lg left-[30px] md:left-[60px] lg:left-[100px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold tracking-widest">
            Explore Novels and Books
          </p>
          <p className="text-white md:text-lg  tracking-wider leading-[18px] mt-4 md:mt-2">
            Not sure what to read next? Explore our catalogue of public books
          </p>
        </div>
      </div>
      <div className="w-5/6 mx-auto py-10">
        <Search />
      </div>

      {/* novels */}

      <div className="w-5/6 mx-auto py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          novels.map((novel, i) => (
            <div className="flex w-full md:w-[350px] cursor-pointer hover:bg-gray-200 rounded-md  h-[200px] gap-5" key={i}>
              <div className="w-[45%] md:w-[40%]">
                <Image src={novel.image} className="w-full h-full object-cover rounded-md" alt="novel image"/>
              </div>
              <div className="w-[55%] md:w-[60%] py-2">
                <p className="mb-3 font-semibold tracking-wider text-sm md:text-base">{novel.title}</p>
                <p className="text-sm">{novel.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default page;
