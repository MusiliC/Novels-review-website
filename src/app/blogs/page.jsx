"use client";
import React, { useEffect, useState } from "react";
import Search from "@/components/search/Search";
import BlogCard from "@/components/BlogCard";

const BlogCardList = ({ data }) => {
  return (
    <div className="lg:w-4/6 w-5/6 mx-auto flex  flex-col">
      {data.map((blog, i) => (
        <BlogCard key={i} blog={blog} />
      ))}
    </div>
  );
};

const page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");

      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <section className="w-full pt-5 md:min-h-[70vh] pb-16">
      <div className="w-5/6 mx-auto pb-10">
        <Search />
      </div>

      <BlogCardList data={blogs} />
    </section>
  );
};

export default page;
