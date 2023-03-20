import React, { useContext,useState } from "react";
import Button from "../components/Button/Button";
import UserContext from "../context/modal/Contextmodel";
import apiPostCall from "../globals/apiPostCall";

const ModalFooter = () => {
  const { setSaveModal,savedResultValue } = useContext(UserContext);
  const [apiData,setApiData] = useState("")
  const closeModal = () =>{
    setSaveModal(false);
    // setSharemodal(false);
  }
  const saveModal =()=>{
    setSaveModal(false);
    const body = {
        "name": savedResultValue,
        "userId": "e321affa-1857-46c6-81e2-20dd13254c84",
        "searchQueryJson": {
          "Name": "Ain",  
          "ISIN" : "AEA000101013"
        }
      }      
      apiPostCall("/api/Issuer/CreateSaveSearch", body)
        .then((res) => {  
          alert(res); 
          setApiData(res);            
        })
        .catch((e) => {
            throw e;             
        }); 
    // setSharemodal(false);
   
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
        onClick={saveModal}
      />
      </div>
      </div>
    </>
  );
};

export default ModalFooter;
