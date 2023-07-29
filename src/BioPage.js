import React, { useState } from "react";
import EditAboutPage from "./EditAboutPage";
import ViewResume from "./ViewResume";
import EditSkills from "./EditSkills";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

const BioPage = ({ editAboutMe, setEditAboutMe }) => {
  const [aboutText, setAboutText] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [resume, setResume] = useState(null);
  const [viewResume, setViewResume] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [subjects, setSubjects] = useState([]);

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
      ) : viewResume ? (
        <ViewResume resume={resume} setViewResume={setViewResume} />
      ) : editSkills ? (
        <EditSkills
          skills={skills}
          setSkills={setSkills}
          hobbies={hobbies}
          setHobbies={setHobbies}
          subjects={subjects}
          setSubjects={setSubjects}
          setEditSkills={setEditSkills}
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
                className="icon cursor-pointer mt-1"
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
            <div className="font-bold text-gray-400">
              {bloodGroup ? bloodGroup : ""}
            </div>
          </div>
          <div
            onClick={() => setViewResume(true)}
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

          <div className="pb-2">
            <div className="flex justify-between about-text">
              <div className="font-bold">Skills </div>
              <PencilIcon
                className="icon cursor-pointer flex items-center mt-1"
                onClick={() => setEditSkills(true)}
              />
            </div>
            <div
              className={`${
                skills?.length || hobbies?.length || subjects?.length
                  ? ""
                  : "text-gray-400 text-center text-sm"
              } `}
            >
              {skills?.length || hobbies?.length || subjects?.length ? (
                <>
                  {skills?.length ? (
                    <>
                      <div>
                        I am incredible at these skills / professionally great
                        at
                      </div>
                      <div className="flex space-x-1 rounded-md py-2 space-y-1 h-20 overflow-x-scroll">
                        {skills.map((item) => (
                          <div
                            key={item?._id}
                            className="w-fit flex bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
                          >
                            <span className="cursor-pointer">
                              {item?.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {hobbies?.length ? (
                    <>
                      <div>Hobbies I am passionate about</div>
                      <div className="flex space-x-1 rounded-md py-2 space-y-1 h-20 overflow-x-scroll">
                        {hobbies.map((item) => (
                          <div
                            key={item?._id}
                            className="w-fit flex bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
                          >
                            <span className="cursor-pointer">
                              {item?.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {subjects?.length ? (
                    <>
                      <div>My favourite subjects are</div>
                      <div className="flex space-x-1 rounded-md py-2 space-y-1 h-20 overflow-x-scroll">
                        {subjects.map((item) => (
                          <div
                            key={item?._id}
                            className="w-fit flex bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
                          >
                            <span className="cursor-pointer">
                              {item?.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </>
              ) : (
                "No soft skills added yet"
              )}
              <div className="mt-4 border-b-2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BioPage;
