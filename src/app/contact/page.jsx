import Image from "next/image";
import React from "react";
import contact from "public/notification.svg";
import Button from "@/components/button/Button";

const page = () => {
  return (
    <section className="w-full md:min-h-[70vh] py-10 md:py-20">
      <div className="w-5/6 mx-auto gap-10 md:gap-20 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <Image src={contact} alt="Contact" className="h-[250px] md:h-[350px]" />
        </div>
        <div className="flex-1 ">
          <div className="mb-5">
            <h2 className="text-lg font-semibold tracking-wider">Lets Keep in Touch</h2>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="5"
              className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
            ></textarea>
            <Button text={"Send"} url={"#"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
