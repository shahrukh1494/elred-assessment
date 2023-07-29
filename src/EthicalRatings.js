import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const EthicalRatings = ({ setEthicalCode, ethicalData }) => {
  return (
    <>
      <div className="flex justify-between mb-8">
        <div className="flex">
          {ethicalData.length}
          <div className="text-gray-400">
            &nbsp; say has ethical code of conduct
          </div>
        </div>
        <XMarkIcon
          onClick={() => setEthicalCode(false)}
          className="mt-2 h-4 w-4 text-red-500 cursor-pointer"
        />
      </div>
      {ethicalData.map((item) => (
        <div key={item.dpURL + Math.random()} className="flex px-2 py-4">
          <div>
            <img
              src={item.dpURL}
              alt="dp"
              className="h-12 w-12 rounded-full border border-gray-100 shadow-sm"
            />
          </div>
          <div className="flex ml-4 flex-col">
            <div>{item.firstname + " " + item.lastname}</div>
            <div className="text-xs text-gray-500">{item.title[0].value}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EthicalRatings;
