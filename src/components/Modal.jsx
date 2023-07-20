import React from "react";

const Modal = ({ isVisible, onClose, selectedBook }) => {


  return (
    <div
      id="wrapper"
      className="w-full mx-auto flex justify-center items-center z-30 fixed inset-0 bg-black "
      onClick={handleClose}
    >
      <div className="w-5/6 ">
        <div className="bg-white p-3 py-5 rounded">
          <div className="flex md:w-[90%] mx-auto justify-between items-center py-2 border-b-2">
            <div>
              <p>Book Description</p>
            </div>
            <div className="cursor-pointer" onClick={() => onClose()}>
              <p className="text-2xl   font-semibold ">X</p>
            </div>
          </div>

          {/* image */}
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:w-[90%] mx-auto py-3">
            {/* image */}
            <div className="flex-1">iamge</div>
            <div className="flex-1 flex flex-col gap-2 md:gap-5">
              <h1 className=" md:text-xl font-semibold tracking-widest">
                {selectedBook.volumeInfo.title}
              </h1>
                        
            </div>
          </div>

          {/* title and desc */}

          <div className="md:w-[90%] py-2 mx-auto">
            <h2 className="text-sm md:text-base">Description</h2>
            <p className="text-sm my-3">
              {selectedBook.volumeInfo.description}
            </p>

            {/*  */}
            <div>
              <button
                onClick={() => onClose()}
                className="p-2 md:p-3 tracking-wide font-semibold text-sm bg-yellow-200 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
