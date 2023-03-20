import React, { useContext } from "react";
import Button from "../components/Button/Button";
import UserContext from "../context/modal/Contextmodel";

const EditViewFooter = () => {
  const { setEditView } = useContext(UserContext);
  const closeModal = () =>{
    setEditView(false);
  }
  return (
    <>
    <p className="block mt-2 mb-2">Enter customer view name to save</p>
<input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
     
<div class="grid grid-rows-1 grid-flow-col gap-4 mt-4">
<div>
         <Button
        value="Cancel"
        variant="secondary"
        size="w-full"
        onClick={closeModal}
      />
      </div>
      <div>
      <Button
        value="Save"
        variant="primary"
        size="w-full"
        onClick={closeModal}
      />
      </div>
      </div>
    </>
  );
};

export default EditViewFooter;
