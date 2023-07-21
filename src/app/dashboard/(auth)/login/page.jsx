"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const session = useSession();
  const router = useRouter();

  // if (session.status === "loading") {
  //   return <p>Loading..</p>;
  // }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <section className="min-h-[70vh] lg:py-12  flex flex-col items-center justify-center">
      <div className="p-10 border w-[90%] md:w-[450px] border-gray-200">
        <div className="flex items-center justify-center">
          <p className="text-lg tracking-widest font-semibold">BookReview App</p>
        </div>
        <div className="my-4 flex items-center gap-5 justify-center">
          <div className="border border-gray-300 w-[50px]" />
          <p className="text-center text-sm">Sign in with google</p>
          <div className="border border-gray-300 w-[50px]" />
        </div>

        <div
          className="p-3 flex mt-7 w-full items-center justify-center border cursor-pointer  border-gray-400 rounded-md"
          onClick={() => signIn("google")}
        >
          <p className="text-lg flex justify-center items-center gap-2">
            <FcGoogle size={30} /> Google
          </p>
        </div>

        <div className="mb-3 mt-7 flex items-center  justify-center">
          <p className="text-sm italic">
            Soon I will be adding form to sign in with email and password😊{" "}
          </p>
        </div>

        {/* <form
          action=""
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
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
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              href={"/dashboard/register"}
              className="text-blue-700 cursor-pointer text-base underline "
            >
              {" "}
              Sign up
            </Link>{" "}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default page;
