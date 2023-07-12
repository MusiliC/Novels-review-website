import Button from "@/components/button/Button";
import Image from "next/image";
import novel from "public/5.jpg";

export default function Home() {
  return (
    <section className="w-full  pt-10 pb-20   flex items-center ">
      <div className="w-5/6  mx-auto gap-[50px] md:gap-[100px] flex flex-col-reverse lg:flex-row">
        <div className="flex-1 flex justify-center lg:justify-start items-center">
          <Image
            src={novel}
            alt="home"
            className="w-[100%] lg:w-[95%] rounded-md object-cover h-[350px] md:h-[430px]"
          />
        </div>

        {/* second item */}
        <div className="flex-1 items-start flex gap-7 justify-center  flex-col">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest">
            Learn Without <br /> Limits and spread Knowledge
          </h1>
          <h2 className="text-sm md:text-lg text-justify">
            The beauty of blogs is that you can get key points of a book
            distilled down into easily digestible information. Find a book
            summary, so you can quickly glean knowledge.
          </h2>
          <div>
            <Button text={"Get Started"} url={"/blogs"} />
          </div>
        </div>
      </div>
    </section>
  );
}
