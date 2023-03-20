import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import UserContext from "../../context/modal/Contextmodel";

const ShareFooter = ({ value1, value2 }) => {
  const { setshare,setshowmodal } = useContext(UserContext);
  const closeModal = () => {
    setshare(false);
    setshowmodal(false);
  };
  return (
    <>
      <div class="grid grid-rows-1 grid-flow-col gap-4 ">
        <div>
          <Button
            value={value1}
            variant="secondary"
            size="w-full"
            onClick={closeModal}
          />
        </div>
        <div>
          <Button
            value={value2}
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
