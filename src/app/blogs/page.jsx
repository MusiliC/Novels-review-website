"use client";
import React, { useEffect, useState } from "react";
import Search from "@/components/search/Search";

import BlogCardList from "@/components/BlogCardList";

const Page = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //filter prompts

  const filterPrompts = (searchItem) => {
    return blogs.filter(
      (item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.information.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.creator.username.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  //handle search change

  const handleSearchChange = async (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="w-full pt-5 md:min-h-[70vh] pb-16">
      <div className="w-5/6 mx-auto pb-10">
        <Search
          placeholder={"Search for tags, username or context"}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearchChange={handleSearchChange}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {searchText && searchText ? (
            <BlogCardList data={searchedResults} />
          ) : (
            <BlogCardList data={blogs} />
          )}
        </>
      )}
    </section>
  );
};

export default Page;
