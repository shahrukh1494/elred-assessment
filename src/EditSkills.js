import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const EditSkills = ({
  skills,
  setSkills,
  hobbies,
  setHobbies,
  subjects,
  setSubjects,
  setEditSkills,
}) => {
  const [skillsInput, setSkillsInput] = useState(false);
  const [fetchedSkills, setFetchedSkills] = useState([]);
  const [tempSkills, setTempSkills] = useState(skills);

  const [hobbiesInput, setHobbiesInput] = useState(false);
  const [fetchedHobbies, setFetchedHobbies] = useState([]);
  const [tempHobbies, setTempHobbies] = useState(hobbies);

  const [subjectsInput, setSubjectsInput] = useState(false);
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  const [tempSubjects, setTempSubjects] = useState(subjects);

  const [checkSubmit, setCheckSubmit] = useState(false);

  useEffect(() => {
    fetch(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
    )
      .then((response) => response.json())
      .then((data) => setFetchedSkills(data.result[0].skills));

    fetch(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json"
    )
      .then((response) => response.json())
      .then((data) => setFetchedHobbies(data.result[0].hobbies));

    fetch(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedSubjects(data.result[0].subjects);
      });
  }, []);

  const setSkillsValues = (val) => {
    setSkillsInput(false);
    setTempSkills([...tempSkills, val]);
    setFetchedSkills(fetchedSkills.filter((item) => item.value !== val.value));
  };

  const deleteSkill = (val) => {
    setFetchedSkills([...fetchedSkills, val]);
    setTempSkills(tempSkills.filter((item) => item.value !== val.value));
  };

  const deleteHobbies = (val) => {
    setFetchedHobbies([...fetchedHobbies, val]);
    setTempHobbies(tempHobbies.filter((item) => item.value !== val.value));
  };

  const setHobbiesValues = (val) => {
    setHobbiesInput(false);
    setTempHobbies([...tempHobbies, val]);
    setFetchedHobbies(
      fetchedHobbies.filter((item) => item.value !== val.value)
    );
  };

  const deleteSubjects = (val) => {
    setFetchedSubjects([...fetchedSubjects, val]);
    setTempSubjects(tempSubjects.filter((item) => item.value !== val.value));
  };

  const setSubjectsValues = (val) => {
    setSubjectsInput(false);
    setTempSubjects([...tempSubjects, val]);
    setFetchedSubjects(
      fetchedSubjects.filter((item) => item.value !== val.value)
    );
  };

  const submitCheck = () => {
    if (
      tempSkills.length !== 0 ||
      tempHobbies.length !== 0 ||
      tempSubjects.length !== 0
    ) {
      setCheckSubmit(false);
    } else setCheckSubmit(true);
  };

  const onSubmit = () => {
    setSubjects(tempSubjects);
    setHobbies(tempHobbies);
    setSkills(tempSkills);
    setEditSkills(false);
  };

  useEffect(() => {
    submitCheck();
  }, [tempSkills, tempHobbies, tempSubjects]);

  return (
    <>
      <div className="flex bio-header">
        <ChevronLeftIcon
          onClick={() => setEditSkills(false)}
          className="flex icon mt-1 cursor-pointer"
        />
        <span className="biotext">Skills</span>
      </div>

      <div className="mt-8">
        I am incredible at these skills / professionally great at
      </div>

      <div
        onClick={() => setSkillsInput(true)}
        className="flex flex-wrap space-x-1 border-2 border-gray-300 rounded-md py-2 px-3 mt-4 space-y-1 h-12 overflow-y-scroll"
      >
        {tempSkills &&
          tempSkills?.map((item) => (
            <div
              key={item._id}
              className="flex w-fit bg-blue-500 rounded-full py-1 px-3 text-sm text-white gap-2"
            >
              <span>{item.value}</span>

              <XMarkIcon
                onClick={() => deleteSkill(item)}
                className="h-4 w-4 mt-[2.5px] cursor-pointer border bg-white text-blue-500 rounded-full"
              />
            </div>
          ))}
      </div>

      {skillsInput && fetchedSkills && (
        <div className="flex flex-wrap space-x-1 shadow-lg rounded-md py-2 px-3 z-999 space-y-1 h-24 overflow-y-scroll">
          {fetchedSkills.map((item) => (
            <div
              key={item?._id}
              className="w-fit bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
            >
              <span
                className="cursor-pointer"
                onClick={() => setSkillsValues(item)}
              >
                {item?.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">Hobbies I am passionate about</div>
      <div
        onClick={() => setHobbiesInput(true)}
        className="flex flex-wrap space-x-1 border-2 border-gray-300 rounded-md py-2 px-3 mt-4 space-y-1 h-12 overflow-y-scroll"
      >
        {tempHobbies &&
          tempHobbies?.map((item) => (
            <div
              key={item._id}
              className="flex w-fit bg-blue-500 rounded-full py-1 px-3 text-sm text-white gap-2"
            >
              <span>{item.value}</span>

              <XMarkIcon
                onClick={() => deleteHobbies(item)}
                className="h-4 w-4 mt-[2.5px] cursor-pointer border bg-white text-blue-500 rounded-full"
              />
            </div>
          ))}
      </div>

      {hobbiesInput && fetchedHobbies && (
        <div className="flex flex-wrap space-x-1 shadow-lg rounded-md py-2 px-3 z-999 space-y-1 h-24 overflow-y-scroll">
          {fetchedHobbies.map((item) => (
            <div
              key={item?._id}
              className="w-fit bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
            >
              <span
                className="cursor-pointer"
                onClick={() => setHobbiesValues(item)}
              >
                {item?.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* /////// */}
      <div className="mt-8">My favourite subjects are</div>
      <div
        onClick={() => setSubjectsInput(true)}
        className="flex flex-wrap space-x-1 border-2 border-gray-300 rounded-md py-2 px-3 mt-4 space-y-1 h-12 overflow-y-scroll"
      >
        {tempSubjects &&
          tempSubjects?.map((item) => (
            <div
              key={item._id}
              className="flex w-fit bg-blue-500 rounded-full py-1 px-3 text-sm text-white gap-2"
            >
              <span>{item.value}</span>

              <XMarkIcon
                onClick={() => deleteSubjects(item)}
                className="h-4 w-4 mt-[2.5px] cursor-pointer border bg-white text-blue-500 rounded-full"
              />
            </div>
          ))}
      </div>

      {subjectsInput && fetchedSubjects && (
        <div className="flex flex-wrap space-x-1 shadow-lg rounded-md py-2 px-3 z-999 space-y-1 h-24 overflow-y-scroll">
          {fetchedSubjects.map((item) => (
            <div
              key={item?._id}
              className="w-fit bg-blue-500 rounded-full py-1 px-4 text-sm text-white gap-2"
            >
              <span
                className="cursor-pointer"
                onClick={() => setSubjectsValues(item)}
              >
                {item?.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        className="w-full p-2 rounded-full bg-[#F74034] text-white bold absolute bottom-0 mb-8 disabled:opacity-20 disabled:cursor-not-allowed"
        onClick={onSubmit}
        disabled={checkSubmit}
      >
        Save
      </button>
    </>
  );
};

export default EditSkills;
