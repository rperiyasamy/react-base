import React, { useContext } from "react";
import Button from "../components/Button/Button";
import UserContext from "../context/modal/Contextmodel";

const ShareFooter = () => {
  const { setShareModal } = useContext(UserContext);
  const closeModal = () =>{
    setShareModal(false);
  }
  return (
    <>
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

export default ShareFooter;
