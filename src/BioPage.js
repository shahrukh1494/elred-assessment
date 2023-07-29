import React, { useState } from "react";
import EditAboutPage from "./EditAboutPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";

const BioPage = ({ editAboutMe, setEditAboutMe }) => {
  const [aboutText, setAboutText] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [resume, setResume] = useState(null);

  return (
    <>
      {editAboutMe ? (
        <EditAboutPage
          setEditAboutMe={setEditAboutMe}
          aboutText={aboutText}
          setAboutText={setAboutText}
          bloodGroup={bloodGroup}
          setBloodGroup={setBloodGroup}
          resume={resume}
          setResume={setResume}
        />
      ) : (
        <div>
          <div className="flex bio-header">
            <ChevronLeftIcon className="flex icon mt-1" />
            <span className="biotext">Bio</span>
          </div>

          <div className="pb-2">
            <div className="flex justify-between about-text">
              <div className="font-bold">About me </div>
              <PencilIcon
                className="icon cursor-pointer"
                onClick={() => setEditAboutMe(true)}
              />
            </div>
            <div
              className={`${
                aboutText ? "break-words" : "text-gray-400 text-center text-sm"
              } `}
            >
              {aboutText ? aboutText : "No About me Added yet"}
              <div className="mt-4 border-b-2"></div>
            </div>
          </div>

          <div className="flex blood-group-header justify-between mb-8">
            <div className="font-bold">Blood Group</div>
            <div
              className="font-bold text-gray-400 cursor-pointer"
              onClick={() => setEditAboutMe(true)}
            >
              {bloodGroup ? bloodGroup : ""}
            </div>
          </div>
          <div
            onClick={() => setEditAboutMe(true)}
            className="flex cursor-pointer justify-between py-4 px-4 shadow-md rounded-md border-[1px]"
          >
            <div className="flex gap-3">
              <img
                src="/resume-icon.png"
                alt="resume upload"
                className="h-8 w-10"
              />
              <div className="font-bold">Resume</div>
            </div>

            <ChevronRightIcon className="icon icon mt-1" />
          </div>
          <div className="mt-4 border-b-[1px] border-gray-300"></div>
        </div>
      )}
    </>
  );
};

export default BioPage;
