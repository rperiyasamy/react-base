import { Disclosure, Tab } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import {
  ChevronRightIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ISSUER } from "../../constants/appConstants";
import Table from "../../components/Table/Table";
import apiGetCall from "../../globals/apiGetCall";
import moment from "moment";

const Dashboard = () => {
  const [Watchlistdata, setWatchlistdata] = useState([]);
  const [savedSearchdata, setSavedSearchdata] = useState([]);

  const watchapi = async () => {
    const data = await apiGetCall(
      "api/Issuer/GetWatchLists?userId=e321affa-1857-46c6-81e2-20dd13254c84"
    );
    data.forEach((element) => {
      element.showDelete = true;
      element.lastModified = moment(element.lastModified).format(
        "DD MMM, yyyy"
      );
    });
    setWatchlistdata(data);
  };
  const savedSearchapi = async () => {
    const data = await apiGetCall(
      "api/Issuer/GetSavedSearchList?userId=e321affa-1857-46c6-81e2-20dd13254c84"
    );
    console.log(data, "datasavedsearch");
    data.forEach((element) => {
      // element.showDelete = true;
      element.lastModified = moment(element.lastModified).format(
        "DD MMM, yyyy"
      );
    });
    setSavedSearchdata(data);
  };
  useEffect(() => {
    watchapi();
    savedSearchapi();
  }, []);

  const handleclick = (id) => {
    window.alert(`your clicking id is:${id}`);
  };
  return (
    <React.Fragment>
      <Tab.Group>
        <div className="flex justify-between px-4 pt-4 border-b">
          <div className="pb-4">
            <h1 className="text-2xl">Issuer</h1> <p>Good Morning! John Smith</p>
          </div>
          <div className="flex">
            <Tab.List className="flex h-full align-middle">
              <Tab
                className="px-6 
                                        ui-selected:border-b-primary 
                                        ui-selected:border-b-2 
                                        ui-selected:text-primary 
                                        ui-not-selected:border-b-2 
                                        ui-not-selected:border-b-transparent 
                                        ui-not-selected:text-black"
              >
                Home
              </Tab>
              <Tab
                className="px-6 
                                        ui-selected:border-b-primary 
                                        ui-selected:border-b-2 
                                        ui-selected:text-primary 
                                        ui-not-selected:border-b-2
                                        ui-not-selected:border-b-transparent 
                                        ui-not-selected:text-black"
              >
                User Review
              </Tab>
              <Tab
                className="px-6 
                                        ui-selected:border-b-primary 
                                        ui-selected:border-b-2 
                                        ui-selected:text-primary 
                                        ui-not-selected:border-b-2
                                        ui-not-selected:border-b-transparent 
                                        ui-not-selected:text-black"
              >
                System Review
              </Tab>
            </Tab.List>
          </div>
        </div>
        <Tab.Panels className="h-full">
          <Tab.Panel className="h-full">
            <div className="grid grid-cols-2 gap-4 px-4 pt-4">
              <div>
                <div className="flex justify-between align-middle mb-4">
                  <h3 className="text-lg">{ISSUER.ELIMINATE}</h3>
                  <h3>
                    <DocumentArrowDownIcon className="w-5" />
                  </h3>
                </div>
                <div className="border">
                  {/* <Table data={Eliminatedata} onclick={handleclick} /> */}
                </div>
              </div>
              <div>
                <div className="flex justify-between align-middle mb-4">
                  <h3 className="text-lg">{ISSUER.SAVED}</h3>
                </div>
                <div className="border">
                  <Table data={savedSearchdata} onclick={handleclick} />
                </div>
              </div>
              <div>
                <div className="flex justify-between align-middle mb-4">
                  <h3 className="text-lg">{ISSUER.WATCH}</h3>
                </div>
                <div className="border">
                  <Table data={Watchlistdata} onclick={handleclick} />
                </div>
              </div>
              <div>
                <Link
                  to={"/issuerList"}
                  className="bg-primary_opacity-500 text-white px-5 py-2 rounded"
                >
                  Search
                </Link>
                <p className="mt-4">{ISSUER.SEARCH}</p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <div className="h-full flex">
              <div className="flex flex-col bg-gray-50 p-4 w-1/6">
                <div className="flex border-b justify-between pb-4">
                  <p className="font-medium">Filter</p>
                  <p className="text-primary">Favorite</p>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Issuer
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-5 flex flex-col gap-2">
                      issuer
                    </Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Status
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-5 flex flex-col gap-2"></Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Issue
                    </Disclosure.Button>
                    <Disclosure.Panel> Issuer</Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Attachments
                    </Disclosure.Button>
                    <Disclosure.Panel> Issuer</Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Status Request
                    </Disclosure.Button>
                    <Disclosure.Panel> Issuer</Disclosure.Panel>
                  </Disclosure>
                </div>
              </div>
              <div className="h-full w-full p-4">
                <h1 className="text-xl mb-4">User Review</h1>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <div className="h-full flex">
              <div className="flex flex-col bg-gray-50 p-4 w-1/6">
                <div className="flex border-b justify-between pb-4">
                  <p className="font-medium">Filter</p>
                  <p className="text-primary">Favorite</p>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Issuer
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-5 flex flex-col gap-2"></Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Status
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-5 flex flex-col gap-2"></Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Issue
                    </Disclosure.Button>
                    <Disclosure.Panel> Issuer</Disclosure.Panel>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="flex items-center gap-1 py-2">
                      <ChevronRightIcon className={"w-4"} /> Reason
                    </Disclosure.Button>
                    <Disclosure.Panel> Issuer</Disclosure.Panel>
                  </Disclosure>
                </div>
              </div>
              <div className="h-full w-full p-4">
                <h1 className="text-xl mb-4">System Review</h1>
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 text-left">
                      <th className="p-2">Date Submitted</th>
                      <th className="p-2">Issuer</th>
                      <th className="p-2">Ticker</th>
                      <th className="p-2">Current Status</th>
                      <th className="p-2">Issue/ Sub-Issue</th>
                      <th className="p-2">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2 text-left">
                      <td className="p-2">Jul 22, 2022</td>
                      <td className="p-2">Georgia Bechtelar</td>
                      <td className="p-2">MKL</td>
                      <td className="p-2">
                        <div className="bg-green-50 w-6 h-6 rounded-full flex items-center justify-center">
                          <CheckIcon className="w-4 text-green-500" />
                        </div>
                      </td>
                      <td className="p-2">Davis, Von and Feil</td>
                      <td className="p-2">Aut Pariatur Qui</td>
                    </tr>
                    <tr className="border-b-2 text-left">
                      <td className="p-2">May 11, 2022</td>
                      <td className="p-2">Oliver Parisian</td>
                      <td className="p-2">MKL</td>
                      <td className="p-2">
                        <div className="bg-red-50 w-6 h-6 rounded-full flex items-center justify-center">
                          <XMarkIcon className="w-4 text-red-500" />
                        </div>
                      </td>
                      <td className="p-2">Zulauf LLC</td>
                      <td className="p-2">Cumque Nesciunt Velit</td>
                    </tr>
                    <tr className="border-b-2 text-left">
                      <td className="p-2">Feb 12, 2023</td>
                      <td className="p-2">Diane Dicki</td>
                      <td className="p-2">MKL</td>
                      <td className="p-2">
                        <div className="bg-green-50 w-6 h-6 rounded-full flex items-center justify-center">
                          <CheckIcon className="w-4 text-green-500" />
                        </div>
                      </td>
                      <td className="p-2">Oberbrunner Group</td>
                      <td className="p-2">Consequuntur Molestiae In</td>
                    </tr>
                    <tr className="border-b-2 text-left">
                      <td className="p-2">Jan 25, 2023</td>
                      <td className="p-2">Christy Fahey V</td>
                      <td className="p-2">MKL</td>
                      <td className="p-2">
                        <div className="bg-green-50 w-6 h-6 rounded-full flex items-center justify-center">
                          <CheckIcon className="w-4 text-green-500" />
                        </div>
                      </td>
                      <td className="p-2">Crist - Keeling</td>
                      <td className="p-2">Ipsa Fugit Dolorem</td>
                    </tr>
                    <tr className="border-b-2 text-left">
                      <td className="p-2">Feb 08, 2023</td>
                      <td className="p-2">Marion Ledner</td>
                      <td className="p-2">MKL</td>
                      <td className="p-2">
                        <div className="bg-red-50 w-6 h-6 rounded-full flex items-center justify-center">
                          <XMarkIcon className="w-4 text-red-500" />
                        </div>
                      </td>
                      <td className="p-2">Murray, Boyer and Harber</td>
                      <td className="p-2">Reiciendis Aut Enim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </React.Fragment>
  );
};
export default Dashboard;
