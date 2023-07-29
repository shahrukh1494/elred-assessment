import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import DeleteResumePopup from "./DeleteResumePopup";

import React, { useState, useEffect } from "react";

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
  const [about, setAbout] = useState(aboutText);
  const [tempResume, setTempResume] = useState(resume);
  const [tempBloodGroup, setTempBloodGroup] = useState(bloodGroup);
  const [submitCheck, setSubmitCheck] = useState(true);
  const [popup, setPopup] = useState(false);

  const uploadResume = (e) => {
    setTempResume(e.target.files[0]);
  };

  const onSubmit = () => {
    if (wordCount > 2 || wordCount === 0) {
      setEditAboutMe(false);
      setAboutText(about);
      setResume(tempResume);
      setBloodGroup(tempBloodGroup);
    }
  };

  const disabledSubmit = () => {
    if (
      (wordCount > 2 || wordCount === 0) &&
      (tempResume !== null || tempBloodGroup !== "")
    )
      setSubmitCheck(false);
    else setSubmitCheck(true);
  };

  useEffect(() => {
    disabledSubmit();
  }, [wordCount, tempResume, tempBloodGroup]);

  return (
    <>
      <div className="flex bio-header">
        <ChevronLeftIcon
          className="flex icon mt-1 cursor-pointer"
          onClick={() => setEditAboutMe(false)}
        />
        <span className="biotext">My Bio</span>
      </div>
      <div className="py-4">Write something about yourself</div>
      <div>
        <textarea
          minlength="3"
          maxlength="500"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
            setWordCount(e.target.value.length);
          }}
          className="w-[100%] bg-[#f6f8fc] p-2 border-0"
          placeholder="Write something here..."
        ></textarea>
        {about && about?.length < 3 ? (
          <div className="text-red-400 text-xs">
            Minimum 3 charcters are required in About me
          </div>
        ) : null}
        <div className="text-gray-400 text-xs text-right">{wordCount}/500</div>
      </div>

      <div
        className={`flex my-6 cursor-pointer bg-[#F6FBFC] ${
          resume
            ? "rounded-md border-2"
            : "flex-col justify-center items-center py-4 border-dashed border-2 border-gray-200"
        } `}
      >
        {!resume && (
          <input
            className="opacity-0 absolute w-[342px] h-[80px] cursor-pointer"
            type="file"
            accept="application/pdf"
            onChange={(e) => uploadResume(e)}
          ></input>
        )}
        {!tempResume && <PhotoIcon className="h-8 w-8 text-blue-600" />}
        <div
          className={`${resume ? "" : "justify-center"} flex w-full flex-col`}
        >
          <div className="p-1 overflow-hidden">
            {tempResume && (
              <embed
                src={URL.createObjectURL(tempResume)}
                width="345"
                height="120"
              ></embed>
            )}
          </div>
          <div
            className={`${
              tempResume ? "justify-between flex items-center" : ""
            } flex p-4`}
          >
            <div
              className={
                tempResume ? "flex items-center" : "text-center w-full"
              }
            >
              {tempResume && (
                <img
                  src="/pdf-icon.png"
                  alt="pdf icon"
                  className="h-8 w-8 flex align-middle mr-2"
                />
              )}

              <div>{tempResume ? tempResume.name : "Upload Resume"}</div>
            </div>
            <div
              onClick={() => {
                setPopup(true);
              }}
            >
              {tempResume ? (
                <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div>Blood Group</div>
        <select
          value={tempBloodGroup}
          onChange={(e) => {
            e.target.value !== "" && setTempBloodGroup(e.target.value);
          }}
          className="cursor-pointer w-full mx-2 my-4 p-2 bg-gray-100 rounded"
        >
          <option value="">Select Blood Group</option>
          <option value="A + (Positive)">A + (Positive)</option>
          <option value="A - (Negative)">A - (Negative)</option>
          <option value="B + (Positive)">B + (Positive)</option>
          <option value="B - (Negative)">B - (Negative)</option>
          <option value="AB - (Negative)">AB - (Negative)</option>
          <option value="AB + (Positive)">AB + (Positive)</option>
          <option value="O - (Negative)">O - (Negative)</option>
          <option value="O + (Positive)">O + (Positive)</option>
        </select>
      </div>
      <button
        className="w-full p-2 rounded-full bg-[#F74034] text-white bold absolute bottom-0 mb-8 disabled:opacity-20 disabled:cursor-not-allowed"
        onClick={onSubmit}
        disabled={submitCheck}
      >
        Save
      </button>
      {popup && (
        <DeleteResumePopup
          popup={popup}
          setPopup={setPopup}
          setTempResume={setTempResume}
        />
      )}
    </>
  );
};

export default EditAboutPage;
