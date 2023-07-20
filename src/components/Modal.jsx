import React from "react";

const Modal = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center z-30 fixed inset-0 bg-black  ">
      <div className="w-5/6 lg:w-4/6">
        <div className="bg-white p-3 py-5 rounded">
          <div className="flex w-[90%] mx-auto justify-between items-center py-3 border-b-2">
            <div>
              <p>Book Description</p>
            </div>
            <div className="cursor-pointer">
              <p className="text-2xl   font-semibold ">X</p>
            </div>
          </div>

          {/* image */}
          <div className="flex w-[90%] mx-auto py-3">
            {/* image */}
            <div className="flex-1">iamge</div>
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="text-xl md:text-3xl font-semibold tracking-widest">
                Title
              </h1>
              <h3 className="text-lg md:text-2xl font-semibold tracking-wider">
                Author
              </h3>
              <h4 className="text-base md:text-xl font-semibold tracking-wide">
                Publisher
              </h4>
            </div>
          </div>

          {/* title and desc */}

          <div className="w-[90%] py-2 mx-auto">
            <h2 className="">Description</h2>
            <p className="text-sm my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              iure obcaecati laborum dolore quae aliquam perferendis nisi
              molestias unde atque.
            </p>

            {/*  */}
            <div>
              <button className="p-2 md:p-3 tracking-wide font-semibold text-sm bg-yellow-200 rounded-md">
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
