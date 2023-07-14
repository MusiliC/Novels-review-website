import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'
import novelImage from "/public/2.jpg";

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


const page = () => {
  return (
    <section className="w-full py-16">
      <div className="w-[90%] mx-auto flex flex-col-reverse gap-10 md:gap-6 md:flex-row justify-between">
        {/* created articles */}
        <div className="lg:w-[65%] grid lg:grid-cols-2  gap-5">
          {novels.map((novel, i) => (
            <div
              className="flex flex-col w-full bg-[#EEEEEE] md:w-[300px] lg:w-[350px] rounded-md cursor-pointer  gap-2"
              key={i}
            >
              <div className="h-[200px] md:h-[150px] lg:h-[200px] ">
                <Image
                  src={novel.image}
                  className="w-full h-full object-cover rounded-t-md"
                  alt="novel image"
                />
              </div>
              <div className="w-[90%] mx-auto  flex flex-col justify-between gap-3  py-2">
                <p className="mb-2 font-semibold tracking-wider text-sm ">
                  {novel.title}
                </p>
                <p className="text-sm text-justify">{novel.desc}</p>

                <div className="flex items-center px-2 py-1 justify-around md:justify-between">
                  <div className="">
                    <p>Edit</p>
                  </div>
                  <div>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* create article for */}

        <div className="lg:w-[35%]">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Book title"
              className="p-3 outline-none bg-transparent border border-primary-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Book Image cover picture"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            />
            <textarea
              name=""
              placeholder="Book article information "
              id=""
              cols="30"
              rows="5"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            ></textarea>
            <input
              type="text"
              placeholder="Book tags eg #success, #mindset"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            />
            <Button text={"Create Article"} url={"#"} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default page