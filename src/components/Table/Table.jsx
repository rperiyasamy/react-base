import React, { useState } from "react";
import Badge from "../Badge/Badge";

const Table = ({ data, onclick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [columns, setColumns] = useState([]);

  // get list of columns from header object
  const listKeys = (headerObj, removeKeys) => {
    const headerArr = Object.keys(headerObj);
    const filteredHeaderValues = headerArr.filter(
      (headerValue) => !removeKeys.includes(headerValue)
    );
    setColumns(filteredHeaderValues);
  };

  React.useEffect(() => {
    if (data && data?.length >=1) {
      listKeys(data[0], ["createdBy", "isActive", "id","userId"]);
    }
  }, [data]);

  // handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // get items for current page
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };

  // generate table header data
  const ThData = () => {
    return (
      columns &&
      columns.length &&
      columns.map((data) => (
        <th className="p-2" key={data}>
          {data.toUpperCase()}
        </th>
      ))
    );
  };

  // generate table row data
  const tdData = () => {
    const currentItems = getCurrentItems();
    return (
      currentItems.length &&
      currentItems?.map((data) => {
        return (
          <tr className="border-b-2 text-left">
            {columns &&
              columns.length &&
              columns.map((v) => {
                return v === "showEdit" && data[v] === true ? (
                  <td
                    className="p-2"
                    onClick={() => onclick(data.id)}
                    value={data.id}
                  >
                    {<Badge variant="PencilIcon" />}
                  </td>
                ) : v === "showDelete" && data[v] === true ? (
                  <td className="p-2" onClick={() => onclick(data.id)}>
                    {" "}
                    {<Badge variant="TrashRed" />}
                  </td>
                ) : v === "showStatus" && data[v] === true ? (
                  <td className="p-2"> {<Badge variant="CircleSuccess" />}</td>
                ) : (
                  <td className="p-2"> {data[v]} </td>
                );
              })}
          </tr>
        );
      })
    );
  };

  const Pagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
        >
          {"<"}
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`bg-gray-200 hover:bg-gray-400 mr-2 text-gray-800 font-bold py-2 px-4 rounded ${
              currentPage === number ? "bg-gray-400" : ""
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        >
          {">"}
        </button>
      </div>
    );
  };
  
  return (

    <div className="overflow-auto w-full "> <table className="w-full">    <thead>      <tr className="border-b-2 text-left">{ThData()}</tr>    </thead>    <tbody>{tdData()}</tbody>  </table>
    {data.length>0?Pagination():""}
    </div> 
     );
};
export default Table;