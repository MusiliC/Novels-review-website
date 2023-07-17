"use client";
import React from "react";

const Form = ({ book, setBook,image, submitting, handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Book title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="p-3 outline-none bg-transparent border border-primary-100 rounded-md"
      />
      <label htmlFor="">
        <span className="text-sm">Book Image cover picture</span>
        <input
          type="file"
          className="p-3 text-sm outline-none w-full bg-transparent border border-primary-100 rounded-md"
        />
      </label>
      <textarea
        name=""
        value={book.information}
        onChange={(e) => setBook({ ...book, information: e.target.value })}
        placeholder="Book article information "
        id=""
        cols="30"
        rows="5"
        className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
      ></textarea>
      <input
        type="text"
        onChange={(e) => setBook({ ...book, tags: e.target.value })}
        value={book.tags}
        placeholder="Book tags eg #success, #mindset"
        className="p-3 text-sm outline-none bg-transparent border border-primary-100 rounded-md"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-secondary-100 rounded-lg  tracking-wider"
      >
        {submitting ? <p>Creating..</p> : <p>Create Article</p>}
      </button>
    </form>
  );
};

export default Form;
