"use client";
import React, { useEffect, useState } from "react";
import BlogCardList from "@/components/BlogCardList";
import { useSearchParams, useParams } from "next/navigation";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/users/${id}/blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (id) fetchBlogs();
  }, [id]);

  return (
    <section className="w-full pt-5 md:min-h-[70vh] pb-16">
      <div className="lg:w-4/6 w-5/6 mx-auto pb-10">
        <div>
          <h1 className="text-2xl md:text-4xl  tracking-widest font-bold">
            {userName}'s Blogs
          </h1>
          <h3 className="md:text-lg font-[550]  my-2 text-wider ">
            Welcome to {userName}'s personalized blogs Page
          </h3>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <BlogCardList data={blogs} />
        </>
      )}
    </section>
  );
};

export default Page;
