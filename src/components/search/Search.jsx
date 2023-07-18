"use client";
import React from "react";

const Search = ({ searchText,  handleSearchChange }) => {
  return (
    <section className="w-full">
      <div className="md:w-[60%] lg:w-[40%]  mx-auto">
        <form action="" className="w-full">
          <input
            type="text"
            placeholder="search for tag or blog title"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="p-3 outline-none text-sm bg-transparent border border-gray-300 w-full text-primary-100 rounded-full"
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
