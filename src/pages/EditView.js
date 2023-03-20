import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";
import UserContext from "../context/modal/Contextmodel";

const EditView = () => {
  const { ViewFields, SelectedFields, SetSelectedFields } =
    useContext(UserContext);
  const [selectedFields, setSelectedFields] = useState([]);
  const [isISINDisabled, setIsISINDisabled] = useState(false);

  const ApplyBtnClick = () => {
    SetSelectedFields(selectedFields);
    //console.log(selectedFields);
  };

  const onCheckboxChange = async (e) => {
    let newArray = [...selectedFields, e.target.name];
    if (selectedFields.includes(e.target.name)) {
      newArray = newArray.filter((n) => n !== e.target.name);
    }

    // newArray.unshift('ISIN');
    await setSelectedFields(newArray);
  };

  useEffect(() => {
    if (ViewFields.includes("ISIN")) {
      setIsISINDisabled(true);
    } else {
      setIsISINDisabled(false);
    }
  }, [ViewFields]);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {[...Array(Math.ceil(ViewFields.length / 5))].map((_, columnIndex) => (
          <div className="flex flex-col" key={`column-${columnIndex}`}>
            {[...Array(5)].map((_, rowIndex) => {
              const dataIndex = columnIndex * 5 + rowIndex;
              if (dataIndex >= ViewFields.length) {
                return null;
              }

              return (
                <Checkbox
                  disabled={ViewFields[dataIndex] === "ISIN"}
                  key={`checkbox-${dataIndex}`}
                  label={ViewFields[dataIndex]}
                  handleChange={onCheckboxChange}
                  Checked={ViewFields[dataIndex] === "ISIN" || selectedFields.indexOf(ViewFields[dataIndex]) > -1}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button
          key="Apply"
          value="Apply"
          variant="primary"
          size="sm"
          onClick={ApplyBtnClick}
        />
      </div>
    </>
  );
};

export default EditView;
