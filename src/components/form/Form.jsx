"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextEditor from "../edtitor/Editor";

const Form = ({ type, book, setBook, submitting, handleSubmit }) => {

  const handleEditorChange = (value) => {
    setBook({ ...book, information: value });
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Book title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="p-2.5 outline-none text-sm bg-transparent border border-primary-100 rounded-md"
      />
      <label htmlFor="" className="text-sm">
        Book article information
      </label>
      <TextEditor
        
        value={book.information}
        onChange={handleEditorChange}
      />
   

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
