import React from "react";
import { ISSUERDETAILS } from "../../constants/appConstants";
const Sharebody = () => {
  return (
    <>
      <p className="font-semibold">{ISSUERDETAILS?.SHORTNOTES}</p>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-14 w-80"
        id="username"
        type="text"
        defaultValue={ISSUERDETAILS?.INPUTVALUE}
      />
    </>
  );
};

export default Sharebody;
