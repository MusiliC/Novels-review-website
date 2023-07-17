"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {

  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit =async(e) => {
    e.preventDefault()

    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, email, password
        })
      })

      response.status === 201 && router.push("/dashboard/login?success=Account created")
      
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <section className="min-h-[70vh] lg:py-12 lg:pb-14 flex flex-col items-center justify-center">
      <div className="p-10 border w-[90%] md:w-[450px] border-gray-200">
        <div className="my-4 flex items-center gap-5 justify-center">
          <div className="border border-gray-300 w-[50px]" />
          <p className="text-center ">Create Account</p>
          <div className="border border-gray-300 w-[50px]" />
        </div>

        <form action="" className="flex flex-col w-full gap-5" onSubmit = {handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            className="p-3 text-sm outline-none bg-transparent border bg-gray-200 text-primary-100 rounded-md"
          />
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
            Sign Up
          </button>
        </form>
        
        {
            err &&   <p className="mt-2 text-sm text-red-500">Something went wrong!</p>
        }      

        <div className="mt-3">
          <p className="text-sm">
            Already have a account?{" "}
            <Link
              href={"/dashboard/login"}
              className="text-blue-700 cursor-pointer text-base underline "
            >
              {" "}
              Log in
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
