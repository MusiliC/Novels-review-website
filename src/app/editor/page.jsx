// "use client";

// import React, { useState } from "react";
// import TextEditor from "../../components/edtitor/Editor.js";



// const CreatePostPage = () => {
//   const [content, setContent] = useState('');

//   const handleEditorChange = (value) => {
//     setContent(value);
//   };

//   const handleSubmit = () => {
//     // Perform your logic to save the content (HTML) to your database or API.
//     console.log(content);
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
//       <div className="w-5/6 mx-auto flex">

//       <TextEditor value={content} onChange={handleEditorChange} />
//       </div>
//       <button
//         className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
//         onClick={handleSubmit}
//       >
//         Save Post
//       </button>
//     </div>
//   );
// };

// export default CreatePostPage;
