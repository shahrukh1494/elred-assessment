import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";

const EditAboutPage = ({
  setEditAboutMe,
  aboutText,
  setAboutText,
  bloodGroup,
  setBloodGroup,
  resume,
  setResume,
}) => {
  const [wordCount, setWordCount] = useState(0);
  const uploadResume = (e) => {
    console.log("clicked");
    setResume(e.target.files[0]);
  };

  return (
    <>
      <div className="flex ml-2 bio-header">
        <ChevronLeftIcon
          className="flex icon mt-1 cursor-pointer"
          onClick={() => setEditAboutMe(false)}
        />
        <span className="biotext">My Bio</span>
      </div>
      <div className="py-4">Write something about yourself</div>
      <div className="mx-2">
        <textarea
          minlength="3"
          maxlength="500"
          value={aboutText}
          onChange={(e) => {
            setAboutText(e.target.value);
            setWordCount(e.target.value.length);
          }}
          className="w-[100%] border-2"
          placeholder="Write something here..."
        ></textarea>
        {aboutText && aboutText.length < 3 ? (
          <div className="text-red-400 text-xs">
            Minimum 3 charcters are required in About me
          </div>
        ) : null}
        <div className="text-gray-400 text-xs text-right">{wordCount}/500</div>
      </div>

      <div
        className={`flex flex-col py-4 my-6 border-t-2 border-gray-200 ${
          resume ? "flex space-between" : "justify-center items-center"
        } `}
      >
        {!resume && (
          <input
            className="opacity-0 absolute w-[375px] h-[56px] cursor-pointer"
            type="file"
            accept="application/pdf"
            onChange={(e) => uploadResume(e)}
          ></input>
        )}
        {!resume && <PhotoIcon className="h-8 w-8 " />}
        <div className="flex space-between justify-center">
          <div>{resume ? resume.name : "Upload Resume"}</div>
          <div onClick={() => setResume(null)}>
            {resume ? (
              <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div>Blood Group</div>
        <select
          value={bloodGroup}
          onChange={(e) => {
            e.target.value !== "" && setBloodGroup(e.target.value);
          }}
          className="cursor-pointer w-full mx-2 my-4"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="AB-">AB-</option>
          <option value="AB+">AB+</option>
          <option value="O-">O-</option>
          <option value="O+">O+</option>
        </select>
      </div>
    </>
  );
};

export default EditAboutPage;
