"use client";
import Link from "next/link";
import React from "react";

const Form = ({ type,book, setBook,image, submitting, handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="">
        <span className="text-sm">Book Image cover picture</span>
        <input
          type="file"
          className="p-3 text-sm outline-none w-full bg-transparent border border-primary-100 rounded-md"
        />
      </label>
      <input
        type="text"
        placeholder="Book title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="p-2.5 outline-none text-sm bg-transparent border border-primary-100 rounded-md"
      />
      <textarea
        name=""
        value={book.information}
        onChange={(e) => setBook({ ...book, information: e.target.value })}
        placeholder="Book article information "
        id=""
        cols="30"
        rows="5"
        className="p-2.5 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
      ></textarea>
      <input
        type="text"
        onChange={(e) => setBook({ ...book, tags: e.target.value })}
        value={book.tags}
        placeholder="Book tags eg #success, #mindset"
        className="p-2.5 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
      />

      <div className="flex justify-between flex-row-reverse items-center gap-2">
        <button
          type="submit"
          className="px-5 py-2 md:w-1/4 bg-secondary-100 rounded-lg  tracking-wider"
        >
          {submitting ? <p>{type}...</p> : <p>{type}</p>}
        </button>
        <Link href="/dashboard" className="md:w-1/4">
          <button
            type="submit"
            className="px-5 w-full py-2 bg-[#47A992] rounded-lg  tracking-wider"
          >
            <p>Cancel</p>
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
