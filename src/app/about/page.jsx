import Image from "next/image";
import React from "react";
import aboutImage from "/public/3.jpg";

const page = () => {
  return (
    <section className="w-full md:min-h-[70vh]">
      {/* upper section */}
      <div className=" relative w-full   h-[300px]">
        <Image
          src={aboutImage}
          className="h-full w-full grayscale-[60%] object-cover"
          alt="about"
        />

        <div className="bg-secondary-100  px-6 py-2 absolute bottom-[20px] rounded-lg left-[30px] md:left-[60px] lg:left-[100px]">
          <p className=" md:text-lg font-semibold tracking-widest">About us</p>
        </div>
      </div>

      {/* lower section */}

      <div className="w-5/6 mx-auto pt-10 pb-16 flex flex-col gap-8 md:gap-[100px] md:flex-row">
        {/* item 1 */}
        <div className="flex-1 justify-start items-center text-justify">
          <h1 className="my-2 text-base md:text-lg font-semibold">
            Who we are
          </h1>
          <p className="text-sm leading-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dolor
            repellendus pariatur! Eos, eum, quo itaque labore assumenda deleniti
            magni vitae placeat eligendi corrupti sunt ipsum nihil eius
            voluptatem. Accusamus?
          </p>
        </div>

        {/* item 2 */}
        <div className="flex-1 justify-start items-center text-justify">
          <h1 className="my-2 text-base md:text-lg font-semibold">
            What we do
          </h1>
          <p className="text-sm leading-[30px]">
            C-tech is a premier tech company specializing in UX design, web development,
            and mobile app development. We create innovative solutions to
            enhance user experiences and build high-quality websites and mobile
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
