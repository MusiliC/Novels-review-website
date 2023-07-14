import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="p-10 border w-[90%] md:w-[450px] border-gray-200">
        <div className="p-3 flex w-full items-center justify-center border  border-gray-400 rounded-md">
          <p className="text-lg flex justify-center items-center gap-2"> <FcGoogle size={30} /> Google</p>
        </div>

        <div className="my-4 flex items-center gap-5 justify-center">
          <div className="border border-gray-300 w-[50px]" />
          <p className="text-center text-sm">Or with email and password</p>
          <div className="border border-gray-300 w-[50px]" />
        </div>

        <form action="" className="flex flex-col w-full gap-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 text-sm outline-none bg-transparent border bg-gray-200 text-primary-100 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter password"
            className="p-3 text-sm outline-none bg-transparent border bg-gray-200 text-primary-100 rounded-md"
          />

          <button className="flex bg-yellow-200 p-3 text-sm justify-center items-center rounded-lg">
            Log in
          </button>
        </form>

        <div className="mt-5">
          <p className='text-sm'>
            Don't have an account?{" "}
            <Link href={"/dashboard/register"} className="text-blue-700 cursor-pointer text-base underline "> Sign up</Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default page