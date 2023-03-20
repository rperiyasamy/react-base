import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";
import UserContext from "../context/modal/Contextmodel";
import apiGetCall from "../globals/interceptors";

const AddToWatchListView = () => {
  const { setWLName, WLName, checked, setChecked } = useContext(UserContext);

  const [enableWLName, setEnableWLName] = React.useState(false);

  const [data, setData] = useState([]);
  const [selectedWL, setSelectedWL] = useState([]);
  async function GetWatchList() {
    const data = await apiGetCall(
      "api/Issuer/GetWatchLists?userId=e321affa-1857-46c6-81e2-20dd13254c84"
    );
    await setData(data);

    console.log(data, "state data");
  }

  useEffect(() => {
    GetWatchList();
  }, []);

  useEffect(() => {
    setEnableWLName(false);
  }, []);

  const onChangeCheckBox = async (e) => {
    setChecked(e.target.id);
  };

  return (
    <>
      <p className="block mt-2 mb-2">Enter Watch List name to save</p>

      <div className="flex flex-row flex-wrap">
        {data.map((data) => (
          <div className="flex gap-2 items-center" key={data.id}>
            <Checkbox
              label={data.name}
              className="rounded"
              handleChange={onChangeCheckBox}
              Checked={(checked == data.id)}
              id={data.id}
            />
          </div>
        ))}
      </div>
      <br />
      <input
        disabled={enableWLName}
        type="text"
        Value={WLName}
        onChange={(e) => setWLName(e.target.value)}
        id="small-input"
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export default AddToWatchListView;
