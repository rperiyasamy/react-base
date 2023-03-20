import React, { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import apiGetCall from "../../globals/apiGetCall";
const MasterSearch = () => {
  const wrapperRef = useRef(null);
  const [showSug, setShowSug] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [Data, setData] = useState([]);
  const [filterButton, setFilterButton] = useState("All");
  const buttonValues = ["All", "Issuer", "ETF", "MF"];

  const MasterApicall = async () => {
    return await apiGetCall("/api/Issuer/Suggest?searchTerm=" + searchText)
      .then((res) => {
        setData(res);
        return res;
      })
      .catch((error) => {
        throw error;
      });
  };

  const navigate = useNavigate();
  let ISIN_NUMBER = "AEA000101013";

  useEffect(() => {
    MasterApicall();
  }, [searchText]);


  //   {
  //     title: "Amazon.com Inc",
  //     text1: "AMZN",
  //     text2: "Technologies",
  //     badge: "Issuer",
  //   },
  //   {
  //     title: "Alphabetic Inc",
  //     text1: "GOOD",
  //     text2: "Communication service",
  //     badge: "Issuer",
  //   },
  //   {
  //     title: "Meta Platform Inc",
  //     text1: "FB",
  //     text2: "Communication service",
  //     badge: "Issuer",
  //   },
  //   {
  //     title: "Apple Inc",
  //     text1: "AAPL",
  //     text2: "TechnologY",
  //     badge: "Issuer",
  //   },
  //   {
  //     title: "Abbott Laboratories",
  //     text1: "ABT",
  //     text2: "",
  //     badge: "ETF",
  //   },
  //   {
  //     title: "Activision Blizzard Inc",
  //     text1: "ATVI",
  //     text2: "",
  //     badge: "ETF",
  //   },
  //   {
  //     title: "American Funds Washigton Mutual Investors Fund Class A",
  //     text1: "AWSHX",
  //     text2: "",
  //     badge: "MF",
  //   },
  // ];
  const handelsubmit = (e, name) => {
    navigate("/issuerdetails", { state: { data: name } });
    setShowSug(false);
  };

  const OnChangeHandler = (e) => {
    let InputValue = e.target.value;
    if (InputValue.length > 0) {
      setShowSug(true);
    } else {
      setShowSug(false);
    }
    setSearchText(InputValue);
  };
  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilterButton(e.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSug(false);
        setSearchText("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef} className="relative drop-shadow-sm">
      <input
        className="bg-primary_opacity-50 focus:ring-2 focus:ring-primary focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-3 ring-1 ring-slate-200 shadow-sm text-dark"
        type="text"
        aria-label="Filter projects"
        placeholder="Search..."
        onChange={OnChangeHandler}
        value={searchText}
      />
      <MagnifyingGlassIcon className="w-4 text-dark absolute right-2 top-2" />
      {showSug ? (
        <div className="absolute bg-white flex flex-col rounded p-4 w-96 mt-1">
          <div className="flex text-sm justify-end text-dark gap-2 border-b pb-4 items-center">
            <label className="font-semibold">Filter:</label>
            {buttonValues.map((value) => (
              <Button
                key={value}
                value={value}
                variant={filterButton === value ? "primary" : "transparent"}
                size="sm"
                onClick={handleFilterChange}
              />
            ))}
          </div>
          {Data.length !== 0 ? (
            Data?.map((item) => {
              return (
                <>
                  <div className="py-4 items-center justify-between border-b last:border-b-0 flex">
                    <div className="flex text-dark flex-col gap-1">
                      <h1>{item}</h1>
                      <div className="flex gap-3">
                        <p
                          className="text-primary cursor-pointer"
                          onClick={(e) => handelsubmit(e, ISIN_NUMBER)}
                        >
                          {item.text1}
                          {ISIN_NUMBER}
                        </p>
                        <p>{item.text2}</p>
                      </div>
                    </div>
                    <div>
                      <Badge value={item.badge} variant={"GrayBlue"} />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="py-4 items-center justify-between border-b last:border-b-0 flex">
              <div className="flex text-dark flex-col gap-1">
                <h1>No Data Found</h1>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MasterSearch;
