import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const DeleteResumePopup = ({ popup, setPopup, setTempResume }) => {
  return (
    <div className="w-[375px] h-full z-99 bg-white top-0 absolute">
      <div className="rounded-md border-2 mt-24">
        <div className="text-center font-bold pt-2 pb-8">
          Resume Delete Pop Up
        </div>
        <div className="flex justify-center">
          <TrashIcon className="h-10 w-10 text-red-500" />
        </div>
        <div className="text-center p-2">
          Are you sure you want to delete your resume?
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setPopup(false)}
            className="p-2 rounded-full bold w-[45%] my-4 ml-4 bg-white border-2"
          >
            cancel
          </button>
          <button
            onClick={() => {
              setTempResume(null);
              setPopup(false);
            }}
            className="p-2 rounded-full bg-[#F74034] text-white bold w-[45%] my-4 mr-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteResumePopup;
