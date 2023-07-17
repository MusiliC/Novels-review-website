"use client";
import Button from "@/components/button/Button";
import Image from "next/image";
import novelImage from "/public/2.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


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


  const { data: session } = useSession();
  const router = useRouter();

  // if (!session?.user) {
  //   return router?.push("/dashboard/login");
  // }



  return (
    <section className="w-full min-h-[70vh] py-10">
      <div className="w-5/6 mx-auto mb-10 flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-widest font-bold">
            My Blogs
          </h1>
          <h3 className="md:text-lg lg:text-xl my-2 tracking-widest font-semibold">
            Welcome to your personalized blogs page
          </h3>
        </div>

        {/* button */}
        <div>
          <Button text={"Create New Blog"} url={"/dashboard/new"} />
        </div>
      </div>
      <div className="w-5/6 mx-auto flex flex-col gap-10 justify-evenly lg:justify-start  md:gap-6 lg:gap-9 flex-wrap md:flex-row ">
        {/* created articles */}

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
    </section>
  );
};

export default page;
