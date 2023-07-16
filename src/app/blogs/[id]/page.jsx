"use client"
import Image from 'next/image'
import React from 'react'
import { useParams } from "next/navigation";
import benCarson from "public/2.jpg";

const page = () => {

  const {id} = useParams()



  return (
    <section className="w-full md:min-h-[70vh]">
      <div className="w-5/6 lg:w-4/6 mx-auto py-14 md:py-8 md:pb-14">
        {/* top section */}
        <div className="">
          {/* right section */}
          <div className="w-full md:w-[50%]">
            <Image
              src={benCarson}
              className="h-[250px] md:h-[350px] w-full rounded-md  object-cover"
              alt="image"
            />
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-2xl tracking-widest font-semibold">
            Take the risk
          </h1>
          <p className="text-sm mt-1">#success</p>
        </div>
        {/* bottom section */}
        {/* blog info */}
        <div className="">
          <p className="text-sm leading-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a odio,
            ipsam quasi labore porro qui ab itaque molestias modi magni
            perspiciatis fugit accusamus dignissimos nulla sunt iusto quos
            vitae.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page