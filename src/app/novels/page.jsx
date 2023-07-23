"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import NovelCard from "@/components/NovelCard";

const Novels = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);

  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;



  const searchBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        ` https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${key}&maxResults=10`
      );

      const data = await res.json();
      setSearchResults(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter&maxResults=10&orderBy=newest&key=${key}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="w-full ">
      <div className="w-5/6 mx-auto py-10">
        <section className="w-full">
          <div className="md:w-[60%] lg:w-[40%]  mx-auto">
            <form
              action=""
              className="w-full flex justify-between gap-2 items-center"
            >
              <input
                type="text"
                placeholder={"Enter book to search"}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                required
                className="p-3 outline-none text-sm bg-transparent border border-gray-300 w-full text-primary-100 rounded-md"
              />
              <button
                className="p-3 bg-gray-200 rounded-md"
                onClick={searchText && searchBook}
              >
                {loading ? "Searching...." : "Search"}
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* novels */}

      <div>
        {loading ? (
          <div className="w-5/6 text-center mx-auto">Loading...</div>
        ) : (
          <NovelCard
            data={searchResults?.length === 0 ? books : searchResults}
          />
        )}
      </div>
    </section>
  );
};

export default Novels;
