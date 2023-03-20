import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

const addnoteBody = ({ title, print }) => {
  return (
    <>
      {print ? (
        <div className="grid grid-cols-3 gap-1">
          <Checkbox label={"Summary Page"} />
          <Checkbox label={"Eliminate Page"} />
          <Checkbox label={"Eliminate History"} />
          <Checkbox label={"Elevate Page"}  />
          <Checkbox label={"Elevate History"} />
          <Checkbox label={"Analyst Notes"} />
        </div>
      ) : (
        <div>
          <p className="font-semibold">{title}</p>
          <textarea
            className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-90 h-20`}
            id="enterName"
            type="text"
          />
        </div>
      )}
    </>
  );
};
export default addnoteBody;
