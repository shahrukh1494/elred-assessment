import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ViewResume = ({ resume, setViewResume }) => {
  return (
    <>
      {resume ? (
        <div>
          <div className="flex justify-between text-sm">
            <div className="flex gap-2 items-center">
              <img
                src="/pdf-icon.png"
                alt="pdf icon"
                className="h-8 w-8 flex align-middle mr-2"
              />
              <div>{resume?.name}</div>
            </div>
            <XMarkIcon
              onClick={() => setViewResume(false)}
              className="flex items-center mt-2 h-4 w-4 cursor-pointer bg-gray-200 rounded font-bold"
            />
          </div>{" "}
          <div className="mt-24 p-1 overflow-hidden">
            <embed
              src={URL.createObjectURL(resume)}
              width="348"
              height="500"
            ></embed>
          </div>
        </div>
      ) : (
        <div>
          <XMarkIcon
            onClick={() => setViewResume(false)}
            className="h-4 w-4 cursor-pointer bg-gray-200 rounded font-bold ml-auto mr-0"
          />
          <div className="text-center mt-[50%]">No Resume added yet</div>
        </div>
      )}
    </>
  );
};

export default ViewResume;
