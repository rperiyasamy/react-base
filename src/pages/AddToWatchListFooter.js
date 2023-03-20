import React, { useContext, useState, useEffect } from "react";
import Button from "../components/Button/Button";
import UserContext from "../context/modal/Contextmodel";
import apiPostCall from "../globals/apiPostCall";

const AddToWatchListFooter = () => {
  const { setAddToWatchList ,WLName,Isin,setWLName,checked,setChecked} = useContext(UserContext);
  const [data,setData] = useState([]);
  const closeModal = () =>{
    setAddToWatchList(false);
    setWLName('');
    setChecked(false)
  }

  const saveWatchList = async() =>{
   
    const body = {
      "name": WLName,
      "userId": "e321affa-1857-46c6-81e2-20dd13254c84",
      "watchListId":  null,
      "issuerId": 1,
      "isin": Isin
    };  
    const data = await apiPostCall("api/Issuer/CreateWatchlist", body);
    await setData(data);
    setAddToWatchList(false);
    console.log(Isin);
    console.log(checked,"checked");
    console.log(WLName);
    console.log(data);
    setAddToWatchList(false);
    setWLName('');
    setChecked(false)
  }

  //useEffect(() => {
   // saveWatchList();  
  //}, []);
  
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
        onClick={saveWatchList}
      />
      </div>
      </div>
    </>
  );
};

export default AddToWatchListFooter;
