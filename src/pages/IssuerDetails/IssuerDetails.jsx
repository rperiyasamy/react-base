import React, { useEffect, useState } from "react";
import RatingList from "../../components/Rating/RatingList";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { useLocation } from "react-router-dom";
import apiGetCall from "../../globals/apiGetCall";
import { ISSUERDETAILS } from "../../constants/appConstants";
import Modal from "../../components/Modals/Modals";
import Sharebody from "./ShareAction";
import UserContext from "../../context/modal/Contextmodel";
import AddnoteBody from "./AddActionBody";
import ShareFooter from "./ShareFooter";
import AddFooter from "./AddFooter";
const IssuerDetails = () => {
  const location = useLocation();
  const isin = location.state?.data;
  const [issuerItem, setIssuerItem] = useState({});
  const [modal, setshowmodal] = useState(false);
  const [sharemodal, setshare] = useState(false);
  const [addmodal, setAddmodal] = useState(false);
  const [print, setPrint] = useState(false);

  async function GetIssuerDetails() {
    return await apiGetCall("api/Issuer/GetIssuer?isin=" + isin)
      .then((res) => {
        setIssuerItem(res);
        return res;
      })
      .catch((e) => {
        throw e;
      });
  }
  useEffect(() => {
    GetIssuerDetails();
  }, []);

  const data=[
    {
       id:1,
        Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
        User:"Andy Manton",
        DatelastModified:"12 Feb, 2023",
        showEdit:true
    } ,
    {
      id:2,
       Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
       User:"Andy Manton",
       DatelastModified:"12 Feb, 2023",
       showEdit:true
   } ,
   {
    id:3,
     Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
     User:"Andy Manton",
     DatelastModified:"12 Feb, 2023",
     showEdit:true
 }, 
 {
  id:4,
   Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
   User:"Andy Manton",
   DatelastModified:"12 Feb, 2023",
   showEdit:true
} ,
{
id:5,
 Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
 User:"Andy Manton",
 DatelastModified:"12 Feb, 2023",
 showEdit:true
},
{
  id:6,
   Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
   User:"Andy Manton",
   DatelastModified:"12 Feb, 2023",
   showEdit:true
} ,
{
id:7,
 Subject:"Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.",
 User:"Andy Manton",
 DatelastModified:"12 Feb, 2023",
 showEdit:true
} 
   
]
  const RatingData = [
    {
      id: "1",
      icon: "communities",
      cell: 3,
      negative: {
        visible: true,
        rating: 2,
      },
      passitive: {
        visible: true,
        rating: 1,
      },
    },
    {
      id: "2",
      icon: "customers",
      cell: 3,
      negative: {
        visible: true,
        rating: 1,
      },
      passitive: {
        visible: true,
        rating: 0,
      },
    },
    {
      id: "3",
      icon: "employees",
      cell: 3,
      negative: {
        visible: true,
        rating: 0,
      },
      passitive: {
        visible: true,
        rating: 3,
      },
    },
    {
      id: "4",
      icon: "environment",
      cell: 3,
      negative: {
        visible: true,
        rating: 2,
      },
      passitive: {
        visible: true,
        rating: 1,
      },
    },
    {
      id: "5",
      icon: "society",
      cell: 3,
      negative: {
        visible: true,
        rating: 2,
      },
      passitive: {
        visible: true,
        rating: 1,
      },
    },
    {
      id: "6",
      icon: "suppliers",
      cell: 3,
      negative: {
        visible: true,
        rating: 2,
      },
      passitive: {
        visible: true,
        rating: 1,
      },
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex justify-between px-4 pt-4 border-b">
        <div className="pb-4">
          <h1 className="text-2xl mb-1">{issuerItem?.Name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <p className="text-gray-400">Date Last Modified</p>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-lg"></div>

            <p className="text-gray-400">{issuerItem?.LastUpdated}</p>
          </div>
        </div>
        <p
          className="cursor-pointer"
          style={{ color: "rgb(14 165 233)" }}
          onClick={() => setPrint(true)}
        >
          {ISSUERDETAILS.PRINT}
        </p>
      </div>
      <div className="flex">
        <div className="p-4">
          <RatingList RatingData={RatingData} />
        </div>
        <div className="p-4 flex-grow">
          <div className="border rounded mb-4">
            <div className="p-3 bg-gray-200">
              <h3>{ISSUERDETAILS?.COMPANY}</h3>
            </div>
            <table className="w-full">
              <tbody>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">{ISSUERDETAILS?.COUNTRY}</td>
                  <td className="p-3">USA</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">{ISSUERDETAILS?.SECTOR}</td>
                  <td className="p-3">{issuerItem?.GICSSector}</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">Industry</td>
                  <td className="p-3">{issuerItem?.GICSIndustry}</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">Investment Style</td>
                  <td className="p-3">Large Growth</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">Indices</td>
                  <td className="p-3">R1000, S&P 500</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3">R1000, S&P 500</td>
                  <td className="p-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border rounded mb-4">
            <div className="p-3 bg-gray-200">
              <h3>{ISSUERDETAILS?.DESCRIPTION}</h3>
            </div>
            <div className="p-3">
              <p>{issuerItem?.Description}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <h3>{ISSUERDETAILS.NOTES}</h3>
              <Button
                variant="primary"
                value="Add notes"
                onClick={() => setAddmodal(true)}
              />
            </div>
            <div className="border rounded">
              {console.log(data,"data value")}
              <Table data={data} onclick={()=>setAddmodal(true)}/>
            </div>
          </div>
        </div>
      </div>
      <UserContext.Provider
        value={{ setshowmodal, setAddmodal, setshare, setPrint }}
      >
        {" "}
        <Modal
          body={<Sharebody />}
          showmodal={modal}
          setshowmodal={setshowmodal}
          footer={<ShareFooter value1={"Cancel"} value2={"Save"} />}
          title={ISSUERDETAILS.VIEW}
          size={"w-[40%]"}
        />
        <Modal
          body={<Sharebody title={ISSUERDETAILS.SHAREVIEW} />}
          showmodal={sharemodal}
          setshowmodal={setshare}
          footer={<ShareFooter value1={"Cancel"} value2={"Share"} />}
          title={ISSUERDETAILS.SHARE}
          size={"w-[50%] "}
        />
        <Modal
          body={<AddnoteBody title={ISSUERDETAILS.SHORTNOTES} />}
          showmodal={addmodal}
          setshowmodal={setAddmodal}
          footer={<AddFooter value1={"Cancel"} value2={"Add"} />}
          title={"Add Notes"}
          size={"w-[28rem]"}
        />
        <Modal
          body={<AddnoteBody print={true} />}
          showmodal={print}
          setshowmodal={setPrint}
          footer={<AddFooter value1={"Cancel"} value2={"OK"} />}
          title={"Select to Print"}
          size={"w-[30%]"}
        />
      </UserContext.Provider>
    </div>
  );
};

export default IssuerDetails;
