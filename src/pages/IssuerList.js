import { Disclosure, Tab } from "@headlessui/react";
import { ArrowPathIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modals/Modals";
// import Table from "../components/Table/Table"
import UserContext from "../context/modal/Contextmodel";
import AddToWatchListView from "./AddToWatchList";
import AddToWatchListFooter from "./AddToWatchListFooter";
import EditView from "./EditView";
import EditViewFooter from "./EditViewFooter";
import ModalFooter from "./ModalFooter";
import Saveresultbody from "./Saveresultbody";
import ShareFooter from "./ShareFooter";
import ShareModal from "./ShareModal";
import TailwindTable, { AvatarCell, CheckBoxColumnFilter, StatusPill } from "../components/Table/TailwindTable";
import SetupInterceptors from "../globals/interceptors";
import apiPostCall from "../globals/apiPostCall";
import axios from "axios";
import Checkbox from "../components/Checkbox/Checkbox";
import { Button } from "../components/TailwindShared/Button";

const IssuerList = () => {
  const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState("");
    const [ViewFields, setViewFields] = useState([]);
    const [SelectedFields, SetSelectedFields] = useState([]);
    const [savedResultValue, SetSavedResultValue] = useState("");
    const [saveModal, setSaveModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [editView, setEditView] = useState(false);
    const [addToWatchList, setAddToWatchList] = useState(false);
    const [WLName, setWLName] = useState("");
    const [Isin, setIsin] = useState();
    const [checked, setChecked] = useState();
    const [showState, setShowState] = useState({});
    const [checkedValues, setCheckedValues] = useState([]);
    const [checkBoxFilter, setCheckBoxFilter] = useState({
        searchIndexName: "*",
        searchText: "string",
        currentPage: 1,
        pageSize: 10,
        useDefaultFacets: true,
        sortOrderfilters: null,
        fieldNamesToReturn: [],
        fieldNamesToSearch: [],
    });
    async function GetIssuerList(count) {
        const body = {
            searchText: "*",
            currentPage: count,
            pageSize: 10,
            useDefaultFacets: true,
            sortOrderfilters: null,
            fieldNamesToReturn: SelectedFields,
            fieldNamesToSearch: [],
            facetOptions: null,
        };
        return await apiPostCall("api/issuer/AdvancedIssuerSearch", body)
            .then((res) => {
                setData(res.results);
                setTotal(res);
                const fields = Object.keys(res.results[0].document);

                //All Fields on first time page load
                if (count == 1) {
                    setViewFields(fields);
                }

                //All Fields added to Selected Fields on page load
                if (count == 1) {
                    SetSelectedFields(fields);
                } else {
                    SetSelectedFields(SelectedFields);
                }
            })
            .catch((e) => {
                throw e;
            });

        // Making ISIN column as mandatory, if it is not added column is inserted to columns array
        // const AddISINColumn = (columns) => {
        //     if (!columns.some((column) => column.Header === "ISIN")) {
        //         columns.unshift({
        //             Header: "ISIN",
        //             accessor: "document.ISIN",
        //             Cell: (e) => (
        //                 <Link className=" items-center text-primary" to="/issuerdetails" state={{ data: e.value }}>
        //                     {" "}
        //                     {e.value}{" "}
        //                 </Link>
        //             ),
        //         });
        //     }
        //     return columns;
        // };
    }

    const columns = SelectedFields.map((key, id) => {
        if (key == "ISIN") {
            return {
                Header: key,
                accessor: "document." + key,
                Cell: (e) => (
                    <Link className=" items-center text-primary" to="/issuerdetails" state={{ data: e.value }}>
                        {" "}
                        {e.value}{" "}
                    </Link>
                ),
            };
        } else {
            return {
                Header: key,
                accessor: "document." + key,
            };
        }
    });
    // AddISINColumn(columns);
    //Add to Watch List for every row
    columns.push({
        Header: "Add To Watch List",
        Cell: ({ row }) => (
            <Link className=" items-center text-primary" onClick={() => handleAddToWatchList(row)}>
                Add to Watch List
            </Link>
        ),
    });
    //on Pagination - NExt and Previous below useEffect is called.
    useEffect(() => {
        //on page load ISIN
        if (count > 1) {
            console.log("on load :" + JSON.stringify(SelectedFields));
            if (!SelectedFields.includes("ISIN")) {
                SelectedFields.unshift("ISIN");
            }
        }
        GetIssuerList(count);
    }, [count]);
    useEffect(() => {
        SetSelectedFields(SelectedFields);
        //console.log(ViewFields);
    }, [SelectedFields]);
    // const columns = React.useMemo(() => [
    //   {
    //     Header: "Issuer Name",
    //     accessor: 'document.Name',
    //     // Cell: AvatarCell,
    //     // imgAccessor: "imgUrl",
    //     // emailAccessor: "email",
    //   },
    //   {
    //     Header: "Ticker",
    //     accessor: 'document.Ticker',
    //     // Cell: StatusPill,
    //     Filter: CheckBoxColumnFilter,  // new
    //     filter: 'includes',
    //   },
    //   {
    //     Header: "ISIN",
    //     accessor: 'document.ISIN',
    //     Cell:  ( e ) => <Link className=' items-center text-primary' to='/issuerdetails' state={{ data : e.value }}> {e.value} </Link>
    //   },
    //   {
    //     Header: "StockExchange",
    //     accessor: 'document.StockExchange',
    //   //   Filter: SelectColumnFilter,  // new
    //   //   filter: 'includes',
    //   },
    //   {
    //     Header: "Market Cap",
    //     accessor: 'document.MarketCap',
    //   },
    //   {
    //     Header: "GICSSector",
    //     accessor: 'document.GICSSector',
    //     // Filter: SelectColumnFilter,  // new
    //     // filter: 'includes',
    //   },
    //   {
    //     Header: "Add To Watch List",
    //     Cell: ({ row }) => <Link className=' items-center text-primary'  onClick={handleAddToWatchList}>Add to Watch List</Link>,
    //   },
    // ], [])

    const reDirectToIssuerDetails = (item) => {
        navigate("/issuerdetails", { state: { isin: item.value } });
    };

    const dataS = React.useMemo(() => data, []);

    const handleSaveResultModal = () => {
        setSaveModal(true);
        SetSavedResultValue("");
    };
    const handleShareModal = () => {
        setShareModal(true);
    };
    const handleEditView = () => {
        setEditView(true);
    };
    const handleAddToWatchList = (row) => {
        setIsin(row.values["document.ISIN"]);
        setAddToWatchList(true);
    };
    const handleCheckChange = (e, facetDisplayName) => {
        const value = e.target.name;
        setCheckedValues((prevValues) => {
            const facetIndex = prevValues.findIndex((facet) => facet.name === facetDisplayName);
            const prevFacetValues = facetIndex !== -1 ? prevValues[facetIndex].values : [];
            if (prevFacetValues.includes(value)) {
                const updatedValues = prevFacetValues.filter((v) => v !== value);
                if (updatedValues.length === 0) {
                    return prevValues.filter((facet) => facet.name !== facetDisplayName);
                } else {
                    return prevValues.map((facet, i) => (i === facetIndex ? { ...facet, values: updatedValues } : facet));
                }
            } else {
                const updatedValues = [...prevFacetValues, value];
                const updatedFacet = { name: facetDisplayName, values: updatedValues };
                if (facetIndex !== -1) {
                    return prevValues.map((facet, i) => (i === facetIndex ? updatedFacet : facet));
                } else {
                    return [...prevValues, updatedFacet];
                }
            }
        });
    };
    const handleApplyClick = () => {
        setCheckBoxFilter((prevFilter) => ({
            ...prevFilter,
            facetOptions: checkedValues,
        }));
    };
    const toggleShowState = (displayName) => {
      setShowState(prevState => ({ ...prevState, [displayName]: !prevState[displayName] }));
    };
    console.log(checkBoxFilter, "checkBoxFilter");
    return (
        <React.Fragment>
            <Tab.Group>
                <div className="flex justify-between px-9 mx-9 pt-4 border-b">
                    <div className="pb-4">
                        <h1 className="text-2xl">Issuer</h1> <p>Good Morning! John Smith</p>
                    </div>
                    <div className="text-white gap-4 flex ml-auto">
                        <Link className=" items-center text-primary" to="/issuerdetails">
                            Export
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary" onClick={handleEditView}>
                            {" "}
                            Edit View
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary" onClick={handleShareModal}>
                            {" "}
                            Share
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary" onClick={handleSaveResultModal}>
                            Save Result
                        </Link>
                    </div>
                    <div className="flex"></div>
                </div>
                <Tab.Panels className="h-full">
                    <Tab.Panel className="h-full">
                        <div className="h-full flex">
                            <div className="flex flex-col bg-gray-50 p-4 w-1/6">
                                <div className="flex border-b justify-between pb-4">
                                    <p className="font-medium">Filter</p>
                                    <p className="text-primary">Favorite</p>
                                </div>
                                <div className="flex-1 overflow-auto py-2">
                                    <Button
                                        onClick={() => {
                                          setCheckedValues([]);
                                          setCheckBoxFilter([])
                                        }}
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleApplyClick();
                                        }}
                                    >
                                        Apply
                                    </Button>
                                    {total?.facets?.map((facet) => {
                                        const facetDisplayName = facet.displayName;
                                        const isShown = showState[facetDisplayName] ?? false;
                                        return (
                                            <>
                                                <div>
                                                    <div className="flex items-center gap-1 py-2" onClick={() => toggleShowState(facetDisplayName)}>
                                                        <ChevronRightIcon className={"w-4"}  /> {facetDisplayName}
                                                    </div>
                                                    {isShown && (
                                                    <div className="pl-5 flex flex-col gap-2">
                                                        {facet.facetItems?.map((item) => {
                                                            const value = item.value;
                                                            const checked = checkedValues.some((facet) => facet.values.includes(value));
                                                            return (
                                                                <>
                                                                    <div className="flex gap-2 items-center" key={data.id}>
                                                                        <Checkbox
                                                                            label={value}
                                                                            className={"rounded"}
                                                                            id={value}
                                                                            name={value}
                                                                            checked={checked}
                                                                            handleChange={(e) => handleCheckChange(e,  facetDisplayName)}
                                                                        />
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                      )}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="h-full w-full p-4">
                                {/* <h1 className="text-xl mb-4">User Review</h1>           */}
                                {/* <InterceptorInstance />     */}

                                <TailwindTable columns={columns} data={data} setCount={setCount} count={count} total={total} />
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <UserContext.Provider
                value={{
                    saveModal,
                    setSaveModal,
                    shareModal,
                    setWLName,
                    WLName,
                    setShareModal,
                    checked,
                    setChecked,
                    editView,
                    setEditView,
                    addToWatchList,
                    Isin,
                    ViewFields,
                    setViewFields,
                    SelectedFields,
                    SetSelectedFields,
                    setAddToWatchList,
                    savedResultValue,
                    SetSavedResultValue,
                }}
            >
                <Modal
                    showmodal={saveModal}
                    setshowmodal={setSaveModal}
                    title="Save your result"
                    body={<Saveresultbody />}
                    footer={<ModalFooter />}
                    isFooterEnable={true}
                />
                <Modal
                    showmodal={shareModal}
                    setshowmodal={setShareModal}
                    title="Share your result"
                    body={<ShareModal />}
                    footer={<ShareFooter />}
                    isFooterEnable={true}
                />
                <Modal
                    setshowmodal={setEditView}
                    showmodal={editView}
                    title="Edit View"
                    body={<EditView />}
                    // size="w-500 h-500"
                    footer={<EditViewFooter />}
                    isFooterEnable={true}
                />

                <Modal
                    setshowmodal={setAddToWatchList}
                    showmodal={addToWatchList}
                    title="Add to Watch List"
                    body={<AddToWatchListView />}
                    // size="w-500 h-500"
                    footer={<AddToWatchListFooter />}
                    isFooterEnable={true}
                />
            </UserContext.Provider>
        </React.Fragment>
    );
};
export default IssuerList;
