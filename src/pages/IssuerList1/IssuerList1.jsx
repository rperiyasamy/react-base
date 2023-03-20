import { Disclosure, Menu, Tab, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/Modals/Modals";
// import Table from "../components/Table/Table"
import UserContext from "../../context/modal/Contextmodel";
import EditView from "../EditView";
import EditViewFooter from "../EditViewFooter";
import ModalFooter from "../ModalFooter";
import Saveresultbody from "../Saveresultbody";
import ShareFooter from "../ShareFooter";
import ShareModal from "../ShareModal";
import TailwindTable, { AvatarCell, SelectColumnFilter, CheckBoxColumnFilter, StatusPill, CheckBoxColumnFilter1 } from "../../components/Table/TailwindTable";
import SetupInterceptors from "../../globals/interceptors";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { checkBoxChecked, checkBoxoption, dropDownSelection, stockValueChecked } from "../../redux/actions/tableAction";
import { Button } from "../../components/TailwindShared/Button";
import apiPostCall from "../../globals/apiPostCall";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const IssuerList1 = () => {
    //let data = require("../assets/data.json");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const [data,setData] = useState([]);
    const [saveModal, setSaveModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [editView, setEditView] = useState(false);
    const options = useSelector((state) => state.IssuerList.userReview.checkboxOption);
    const stockOptions = useSelector((state) => state.IssuerList.userReview.stockedOption);
    const [checked, setChecked] = React.useState([]);
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [stockOpen, setStockOpen] = useState(false);
    const dropDownArray = ["StockValue", "IssuerValue","ISIN","Ticker","GicsSector"];
    async function GetIssuerList() {
        const body = {
            searchText: "*",
            currentPage: count,
            pageSize: 10,
            useDefaultFacets: true,
            sortOrderfilters: null,
            fieldNamesToReturn: [],
            fieldNamesToSearch: [],
            facetOptions: null,
        };
        return await apiPostCall("api/issuer/AdvancedIssuerSearch", body)
            .then(async (res) => {
                //await setData(JSON.stringify(res));
                console.log("API data : " + data);
            })
            .catch((e) => {
                throw e;
            });
    }

    useEffect(() => {
        //GetIssuerList();
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                accessor: "document.Name",
                // Cell: AvatarCell,
                // imgAccessor: "imgUrl",
                // emailAccessor: "email",
            },
            {
                Header: "ISIN",
                accessor: "document.ISIN",
                Cell: (props) => reDirectToIssuerDetails(props),
            },
            {
                Header: "Ticker",
                accessor: "document.Ticker",
                // Cell: StatusPill,
                // Filter: CheckBoxColumnFilter, // new
                // filter: "includes",
                Filter: CheckBoxColumnFilter1, // new
                filter: "includes",
            },
            {
                Header: "StockExchange",
                accessor: "document.StockExchange",
                // Filter: SelectColumnFilter, // new
                // filter: "includes",
                // Filter: CheckBoxColumnFilter1, // new
                // filter: "includes",
            },
            {
                Header: "GICSSector",
                accessor: "document.GICSSector",
                // Filter: SelectColumnFilter,  // new
                // filter: 'includes',
                Filter: CheckBoxColumnFilter, // new
                filter: "includes",
            },
        ],
        []
    );
    const reDirectToIssuerDetails = (item) => {
        // return <Link  className=' items-center text-primary' to={{ pathname :'/issuerdetails', state : item.value}} >{item.value}</Link>
        return (
            <Link className=" items-center text-primary" to="/issuerdetails" state={{ data: item.value }}>
                {item.value}
            </Link>
        );
    };
    const data = {
        facets: [
            {
                displayName: "PredatoryLendingIssues",
                facetName: "PredatoryLendingIssues",
                tagName: "",
                facetItems: [{ value: "Predatory Lending Direct Tie", count: 107 }],
            },
            {
                displayName: "EliminateStatus",
                facetName: "EliminateStatus",
                tagName: "",
                facetItems: [
                    { value: "Pass", count: 83325 },
                    { value: "Fail", count: 1889 },
                ],
            },
            {
                displayName: "GamblingIssues",
                facetName: "GamblingIssues",
                tagName: "",
                facetItems: [
                    { value: "Gambling Production", count: 267 },
                    { value: "Gambling Supply", count: 97 },
                    { value: "Gambling Distribution", count: 5 },
                ],
            },
            {
                displayName: "AbortionIssues",
                facetName: "AbortionIssues",
                tagName: "",
                facetItems: [
                    { value: "Abortion Procedure", count: 174 },
                    { value: "Abortifacients Production", count: 9 },
                    { value: "Abortifacients Distribution", count: 2 },
                ],
            },
            {
                displayName: "StockExchange",
                facetName: "StockExchange",
                tagName: "",
                facetItems: [
                    { value: "Not Collected", count: 18630 },
                    { value: "US OTC", count: 5339 },
                    { value: "NASDAQ", count: 5164 },
                    { value: "Tokyo Stock Exchange", count: 4459 },
                    { value: "BSE Ltd.", count: 4255 },
                    { value: "New York Stock Exchange", count: 2996 },
                    { value: "Hong Kong Stock Exchange", count: 2876 },
                    { value: "Shenzhen Stock Exchange", count: 2728 },
                    { value: "ASX", count: 2690 },
                    { value: "Korea Exchange", count: 2675 },
                    { value: "London Stock Exchange", count: 2660 },
                    { value: "TSX Venture Exchange", count: 2296 },
                    { value: "Shanghai Stock Exchange", count: 2087 },
                    { value: "Taipei Exchange", count: 1294 },
                    { value: "Toronto Stock Exchange", count: 1233 },
                    { value: "Malaysia Stock Exchange", count: 1112 },
                    { value: "Euronext Paris", count: 1038 },
                    { value: "Taiwan Stock Exchange", count: 1037 },
                    { value: "Stock Exchange of Thailand", count: 930 },
                    { value: "NASDAQ OMX Stockholm", count: 916 },
                    { value: "Singapore Exchange", count: 882 },
                    { value: "Moscow Exchange", count: 865 },
                    { value: "Indonesia Exchange", count: 837 },
                    { value: "Warsaw Stock Exchange", count: 806 },
                    { value: "Canadian Securities Exchange", count: 759 },
                    { value: "Tel Aviv Stock Exchange", count: 583 },
                    { value: "XETRA", count: 579 },
                    { value: "Hanoi Stock Exchange", count: 554 },
                    { value: "Istanbul Stock Exchange", count: 550 },
                    { value: "Milan Stock Exchange", count: 524 },
                    { value: "Bolsa De Valores De Sao Paulo", count: 504 },
                    { value: "Pakistan Stock Exchange", count: 456 },
                    { value: "Oslo Bors", count: 440 },
                    { value: "Ho Chi Minh Stock Exchange", count: 416 },
                    { value: "Johannesburg Securities Exchange", count: 406 },
                    { value: "Colombo Stock Exchange", count: 304 },
                    { value: "BME - Bolsas Y Mercados Espanoles", count: 300 },
                    { value: "NYSE American", count: 298 },
                    { value: "Dhaka Stock Exchange", count: 296 },
                    { value: "Philippine Stock Exchange", count: 296 },
                    { value: "SIX Swiss Exchange", count: 294 },
                    { value: "Frankfurt Stock Exchange", count: 277 },
                    { value: "Egyptian Exchange", count: 267 },
                    { value: "Saudi Arabia Stock Exchange", count: 263 },
                    { value: "Athens Stock Exchange", count: 244 },
                    { value: "Santiago Stock Exchange", count: 230 },
                    { value: "Amman Stock Exchange", count: 229 },
                    { value: "NASDAQ OMX Copenhagen", count: 224 },
                    { value: "NASDAQ OMX Helsinki", count: 219 },
                    { value: "Spotlight Stock Market", count: 209 },
                    { value: "Kuwait Stock Exchange", count: 203 },
                    { value: "PFTS Exchange", count: 197 },
                    { value: "National Stock Exchange of India", count: 192 },
                    { value: "Euronext Amsterdam", count: 191 },
                    { value: "Euronext Brussels", count: 190 },
                    { value: "Lima Stock Exchange", count: 190 },
                    { value: "Bulgarian Stock Exchange", count: 184 },
                    { value: "New Zealand Stock Exchange", count: 179 },
                    { value: "Nigerian Stock Exchange", count: 175 },
                    { value: "Mexican Stock Exchange", count: 172 },
                    { value: "JASDAQ", count: 168 },
                    { value: "Bucharest Stock Exchange", count: 158 },
                    { value: "Zagreb Stock Exchange", count: 145 },
                    { value: "Teheran Stock Exchange", count: 132 },
                    { value: "Muscat Securities Market", count: 130 },
                    { value: "Korea KONEX", count: 119 },
                    { value: "NEX Exchange", count: 109 },
                    { value: "Buenos Aires Stock Exchange", count: 96 },
                    { value: "Hamburg Stock Exchange", count: 92 },
                    { value: "Mauritius Stock Exchange", count: 90 },
                    { value: "Vienna Stock Exchange", count: 90 },
                    { value: "Nordic Growth Market", count: 88 },
                    { value: "Abu Dhabi Securities Exchange", count: 87 },
                    { value: "Tunis Stock Exchange", count: 85 },
                    { value: "Cyprus Stock Exchange", count: 83 },
                    { value: "Berlin Stock Exchange", count: 82 },
                    { value: "Nagoya Stock Exchange", count: 81 },
                    { value: "Casablanca Stock Exchange", count: 77 },
                    { value: "Colombia Stock Exchange", count: 74 },
                    { value: "Jamaica Stock Exchange", count: 68 },
                    { value: "Norwegian OTC Market", count: 65 },
                    { value: "Belgrade Stock Exchange", count: 62 },
                    { value: "Nairobi Stock Exchange", count: 62 },
                    { value: "Zimbabwe Stock Exchange", count: 60 },
                    { value: "Dubai Financial Market", count: 59 },
                    { value: "Euronext Lisbon", count: 59 },
                    { value: "Budapest Stock Exchange", count: 53 },
                    { value: "Ljubljana Stock Exchange", count: 52 },
                    { value: "Palestine Securities Exchange", count: 51 },
                    { value: "Kazakhstan Stock Exchange", count: 50 },
                    { value: "Qatar Exchange", count: 50 },
                    { value: "NEO Exchange", count: 47 },
                    { value: "Irish Stock Exchange", count: 45 },
                    { value: "Munich Stock Exchange", count: 45 },
                    { value: "Bahrain Bourse", count: 44 },
                    { value: "NASDAQ OMX Vilnius", count: 44 },
                    { value: "Ivory Coast Stock Exchange", count: 42 },
                    { value: "Stuttgart Stock Exchange", count: 38 },
                    { value: "National Stock Exchange of Australia", count: 35 },
                    { value: "Prague Stock Exchange", count: 34 },
                ],
            },
            {
                displayName: "AlcoholIssues",
                facetName: "AlcoholIssues",
                tagName: "",
                facetItems: [
                    { value: "Alcohol Production", count: 362 },
                    { value: "Alcohol Distribution", count: 239 },
                    { value: "Alcohol Supply", count: 65 },
                ],
            },
            {
                displayName: "AdultEntertainmentIssues",
                facetName: "AdultEntertainmentIssues",
                tagName: "",
                facetItems: [
                    { value: "Adult Entertainment Distribution", count: 15 },
                    { value: "Adult Entertainment Production", count: 13 },
                ],
            },
            {
                displayName: "MarketCapRange",
                facetName: "MarketCapRange",
                tagName: "",
                facetItems: [
                    { value: "0M - 500M", count: 71618 },
                    { value: "1B - 10B", count: 7529 },
                    { value: "500M - 1B", count: 4409 },
                    { value: "10B - 25B", count: 926 },
                    { value: "25B - 50B", count: 414 },
                    { value: "50B - 100B", count: 179 },
                    { value: "100B - 250B", count: 105 },
                    { value: "250B - 500B", count: 26 },
                    { value: "> 500B", count: 8 },
                ],
            },
            {
                displayName: "CannabisIssues",
                facetName: "CannabisIssues",
                tagName: "",
                facetItems: [
                    { value: "Cannabis Production", count: 283 },
                    { value: "Cannabis Distribution", count: 259 },
                ],
            },
            {
                displayName: "GICSIndustry",
                facetName: "GICSIndustry",
                tagName: "",
                facetItems: [
                    { value: "Not Collected", count: 23245 },
                    { value: "Metals & Mining", count: 4146 },
                    { value: "Real Estate Management & Development", count: 2527 },
                    { value: "Oil, Gas & Consumable Fuels", count: 2267 },
                    { value: "Machinery", count: 2237 },
                    { value: "Food Products", count: 2234 },
                    { value: "Chemicals", count: 2226 },
                    { value: "Capital Markets", count: 2198 },
                    { value: "Software", count: 2119 },
                    { value: "Electronic Equipment, Instruments & Components", count: 2061 },
                    { value: "Banks", count: 1757 },
                    { value: "Hotels, Restaurants & Leisure", count: 1655 },
                    { value: "Biotechnology", count: 1638 },
                    { value: "Construction & Engineering", count: 1638 },
                    { value: "Pharmaceuticals", count: 1610 },
                    { value: "Textiles, Apparel & Luxury Goods", count: 1511 },
                    { value: "IT Services", count: 1453 },
                    { value: "Electrical Equipment", count: 1276 },
                    { value: "Semiconductors & Semiconductor Equipment", count: 1225 },
                    { value: "Commercial Services & Supplies", count: 1218 },
                    { value: "Health Care Equipment & Supplies", count: 1185 },
                    { value: "Media", count: 1175 },
                    { value: "Specialty Retail", count: 1000 },
                    { value: "Auto Components", count: 992 },
                    { value: "Household Durables", count: 970 },
                    { value: "Health Care Providers & Services", count: 963 },
                    { value: "Insurance", count: 932 },
                    { value: "Equity Real Estate Investment Trusts (REITs)", count: 902 },
                    { value: "Trading Companies & Distributors", count: 848 },
                    { value: "Entertainment", count: 781 },
                    { value: "Diversified Financial Services", count: 661 },
                    { value: "Professional Services", count: 660 },
                    { value: "Communications Equipment", count: 651 },
                    { value: "Construction Materials", count: 610 },
                    { value: "Energy Equipment & Services", count: 602 },
                    { value: "Food & Staples Retailing", count: 591 },
                    { value: "Building Products", count: 587 },
                    { value: "Independent Power & Renewable Electricity Producers", count: 559 },
                    { value: "Diversified Consumer Services", count: 531 },
                    { value: "Electric Utilities", count: 519 },
                    { value: "Containers & Packaging", count: 512 },
                    { value: "Diversified Telecommunication Services", count: 502 },
                    { value: "Personal Products", count: 487 },
                    { value: "Consumer Finance", count: 484 },
                    { value: "Technology Hardware, Storage & Peripherals", count: 454 },
                    { value: "Beverages", count: 446 },
                    { value: "Internet & Direct Marketing Retail", count: 408 },
                    { value: "Aerospace & Defense", count: 402 },
                    { value: "Paper & Forest Products", count: 383 },
                    { value: "Interactive Media & Services", count: 376 },
                    { value: "Distributors", count: 371 },
                    { value: "Road & Rail", count: 352 },
                    { value: "Transportation Infrastructure", count: 338 },
                    { value: "Marine", count: 323 },
                    { value: "Life Sciences Tools & Services", count: 302 },
                    { value: "Air Freight & Logistics", count: 291 },
                    { value: "Health Care Technology", count: 262 },
                    { value: "Industrial Conglomerates", count: 261 },
                    { value: "Leisure Products", count: 261 },
                    { value: "Thrifts & Mortgage Finance", count: 258 },
                    { value: "Internet Software & Services", count: 248 },
                    { value: "Automobiles", count: 196 },
                    { value: "Multiline Retail", count: 194 },
                    { value: "Gas Utilities", count: 188 },
                    { value: "Wireless Telecommunication Services", count: 176 },
                    { value: "Airlines", count: 160 },
                    { value: "Water Utilities", count: 138 },
                    { value: "Household Products", count: 123 },
                    { value: "Tobacco", count: 105 },
                    { value: "Multi-Utilities", count: 81 },
                    { value: "Real Estate Investment Trusts (REITs)", count: 73 },
                    { value: "Mortgage Real Estate Investment Trusts (REITs)", count: 57 },
                    { value: "Real Estate", count: 31 },
                    { value: "Office Electronics", count: 6 },
                    { value: "Semiconductor Equipment & Products", count: 5 },
                ],
            },
            {
                displayName: "GICSIndustryGroup",
                facetName: "GICSIndustryGroup",
                tagName: "",
                facetItems: [
                    { value: "Not Collected", count: 23245 },
                    { value: "Materials", count: 7877 },
                    { value: "Capital Goods", count: 7249 },
                    { value: "Software & Services", count: 3820 },
                    { value: "Pharmaceuticals, Biotechnology & Life Sciences", count: 3550 },
                    { value: "Real Estate", count: 3533 },
                    { value: "Diversified Financials", count: 3400 },
                    { value: "Technology Hardware & Equipment", count: 3177 },
                    { value: "Energy", count: 2869 },
                    { value: "Food, Beverage & Tobacco", count: 2785 },
                    { value: "Consumer Durables & Apparel", count: 2742 },
                    { value: "Health Care Equipment & Services", count: 2410 },
                    { value: "Consumer Services", count: 2186 },
                    { value: "Media & Entertainment", count: 2023 },
                    { value: "Banks", count: 2015 },
                    { value: "Retailing", count: 1973 },
                    { value: "Commercial & Professional Services", count: 1878 },
                    { value: "Utilities", count: 1485 },
                    { value: "Transportation", count: 1464 },
                    { value: "Semiconductors & Semiconductor Equipment", count: 1225 },
                    { value: "Automobiles & Components", count: 1188 },
                    { value: "Insurance", count: 932 },
                    { value: "Telecommunication Services", count: 678 },
                    { value: "Household & Personal Products", count: 610 },
                    { value: "Food & Staples Retailing", count: 591 },
                    { value: "Media", count: 309 },
                ],
            },
            {
                displayName: "GICSSector",
                facetName: "GICSSector",
                tagName: "",
                facetItems: [
                    { value: "Not Collected", count: 23245 },
                    { value: "Industrials", count: 10591 },
                    { value: "Consumer Discretionary", count: 8398 },
                    { value: "Information Technology", count: 8222 },
                    { value: "Materials", count: 7877 },
                    { value: "Financials", count: 6641 },
                    { value: "Health Care", count: 5960 },
                    { value: "Consumer Staples", count: 3986 },
                    { value: "Real Estate", count: 3239 },
                    { value: "Energy", count: 2869 },
                    { value: "Communication Services", count: 2701 },
                    { value: "Utilities", count: 1485 },
                ],
            },
            {
                displayName: "SevereEthicsControversiesIssues",
                facetName: "SevereEthicsControversiesIssues",
                tagName: "",
                facetItems: [
                    { value: "Severe Ethics Controversies", count: 161 },
                    { value: "Labor Management Relations", count: 41 },
                    { value: "Impact on Local Communities", count: 31 },
                    { value: "Human Rights Concerns", count: 28 },
                    { value: "Product Safety & Quality", count: 18 },
                    { value: "Environment Supply Chain", count: 13 },
                    { value: "Environment Toxic Emissions & Waste", count: 13 },
                    { value: "Health & Safety", count: 8 },
                    { value: "Supply Chain Labor Standards", count: 4 },
                    { value: "Bribery & Fraud", count: 2 },
                ],
            },
            {
                displayName: "TobaccoIssues",
                facetName: "TobaccoIssues",
                tagName: "",
                facetItems: [
                    { value: "Tobacco Production", count: 118 },
                    { value: "Tobacco Distribution", count: 48 },
                    { value: "Tobacco Supply", count: 42 },
                ],
            },
        ],
        results: [
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000101013",
                    Name: "Al Ain Ahlia Insurance Co.",
                    Ticker: "ALAIN",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Insurance",
                    GICSIndustry: "Insurance",
                    MarketCapRange: "0M - 500M",
                    MarketCap: 134800000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Al Ain Ahlia Insurance Co. engages in the provision of insurance services. It operates through Underwriting of General Insurance Business and Investments segments. The Underwriting of General Insurance Business segment incorporates all classes of general insurance such as fire, marine, motor, medical, general accident, and miscellaneous. The Investments segment is involved in the investments in marketable equity securities and investment funds, development bonds, term deposits with banks, and investment properties and other securities. The company was founded on October 30, 1975 and is headquartered in Abu Dhabi, United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:20:24.519Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000201011",
                    Name: "Abu Dhabi Commercial Bank",
                    Ticker: "ADCB",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Banks",
                    GICSIndustry: "Banks",
                    MarketCapRange: "10B - 25B",
                    MarketCap: 15645000000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi Commercial Bank engages in the provision of commercial banking services. It operates through the following segments: Consumer Banking; Wholesale Banking; Investments and Treasury; and Property Management. The Consumer Banking segment includes retail, wealth management, Islamic financing, and investment in associates. The Wholesale Banking segment consists of business banking, cash management, trade finance, corporate finance, small and medium enterprise financing, investment banking, Islamic financing, infrastructure and asset finance, and government and public enterprises. The Investments and Treasury segment is involved in central treasury operations, management of the group’s investment portfolio and interest rate, currency and commodity derivative portfolio, and Islamic financing. The Property Management segment covers the real estate management and engineering service operations of subsidiaries, and rental income earned from properties of the group. The company was foun",
                    LastUpdated: "2023-03-13T09:04:39.256Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000301019",
                    Name: "Abu Dhabi National Hotels",
                    Ticker: "ADNH",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Consumer Discretionary",
                    GICSIndustryGroup: "Consumer Services",
                    GICSIndustry: "Hotels, Restaurants & Leisure",
                    MarketCapRange: "1B - 10B",
                    MarketCap: 1576300000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi National Hotels engages in the ownership, operation, and management of hotels. It operates through Hotels and Transport Services segments. The company was founded on April 13, 1975 and is headquartered in Abu Dhabi, the United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:19:26.327Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000401017",
                    Name: "Al Khazna Insurance Co.",
                    Ticker: "AKIC",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Insurance",
                    GICSIndustry: "Insurance",
                    MarketCapRange: "0M - 500M",
                    MarketCap: 6500000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Al Khazna Insurance Co. engages in the provision of insurance and reinsurance services. It operates through Underwriting and Investments and Others segments. The Underwriting segment incorporates all classes of general insurance, such as fire, marine, motor, general accident and miscellaneous. The Investments and Others segment incorporates investment in marketable equity securities, term deposits with banks and investment properties and other securities. The company was founded in 1996 and is headquartered in Abu Dhabi, United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:20:32.053Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000501014",
                    Name: "Abu Dhabi National Co. for Building Materials",
                    Ticker: "BILDCO",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Materials",
                    GICSIndustryGroup: "Materials",
                    GICSIndustry: "Construction Materials",
                    MarketCapRange: "0M - 500M",
                    MarketCap: 15900000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi National Co. for Building Materials engages in the manufacture and trade of building materials. Its products include structural steel for high rise tower, steel reinforcement, steel couplers, fusion bonded epoxy coating, cement concrete blocks, interlocking paving stones, and wood products. The firm also acts as agents and representatives of various trading agencies and companies. The company was founded on January 1, 1974 and is headquartered in Abu Dhabi, the United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:20:01.143Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000601012",
                    Name: "Al Dhafra Insurance Co. PSC",
                    Ticker: "DHAFRA",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Insurance",
                    GICSIndustry: "Insurance",
                    MarketCapRange: "0M - 500M",
                    MarketCap: 147000000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Al Dhafra Insurance Co. engages in the provision of insurance and reinsurance services. It operates through Underwriting of General Insurance Business, and Investments segments. The Underwriting of General Insurance Business segment covers fire, marine, motor, general accident and miscellaneous insurance. The Investments segment includes the investments on funds, bonds, banks and other securities. The company was founded on January 1, 1979 and is headquartered in Abu Dhabi, United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:20:19.727Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000701010",
                    Name: "Waha Capital PJSC",
                    Ticker: "WAHA",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Diversified Financials",
                    GICSIndustry: "Diversified Financial Services",
                    MarketCapRange: "500M - 1B",
                    MarketCap: 715900000,
                    EliminateStatus: "Fail",
                    AbortionIssues: ["Abortion Procedure"],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Waha Capital PJSC invests in a range of sectors, including aviation leasing, financial services, capital markets, industrial real estate, infrastructure, healthcare, oil and gas, fintech and maritime services. It operates through the following segments: Private Investments, Waha Land, Public Markets, and Corporate. The Private Investments segment holds all of the group’s proprietary investments in diversified industries, including aviation leasing, maritime, financial services, infrastructure, oil and gas, fintech, industrial real estate and healthcare. The Waha Land segment covers the group interest in industrial real estate. The Public Markets segment represents a platform to provide investors access to opportunities in equities and other asset management services. The Corporate segment comprises the group’s activities, which are not allocated to reportable segments. The company was founded on May 20, 1997 and is headquartered in Abu Dhabi, United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:19:05.906Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000801018",
                    Name: "Abu Dhabi Islamic Bank",
                    Ticker: "ADIB",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Financials",
                    GICSIndustryGroup: "Banks",
                    GICSIndustry: "Banks",
                    MarketCapRange: "10B - 25B",
                    MarketCap: 10204100000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi Islamic Bank engages in the provision of Shariah-based banking, financing, and investment services. It operates through the following segments: Global Retail Banking, Global Wholesale Banking, Private Banking, Treasury, Real Estate, and Other Operations. The Global Retail Banking segment handles small and medium businesses and deposits of individual customers, and provides consumer and commercial murabahat, Ijara, Islamic covered card, and funds transfer and trade finance facilities. The Global Wholesale Banking segment covers financing, other credit facilities, deposits, and current accounts for corporate and institutional customers. The Private Banking segment includes financing, other credit facilities, deposits, and current accounts for high net worth individual customers. The Treasury segment consists of money market; trading and treasury services; and management of funding operations of the bank by use of investment deposits. The Real Estate segment acquires sells, dev",
                    LastUpdated: "2023-03-13T09:04:53.944Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA000901016",
                    Name: "Abu Dhabi Ship Building Co.",
                    Ticker: "ADSB",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Industrials",
                    GICSIndustryGroup: "Capital Goods",
                    GICSIndustry: "Aerospace & Defense",
                    MarketCapRange: "0M - 500M",
                    MarketCap: 238400000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi Ship Building Co. engages in the construction, maintenance, repair, and overhaul of naval, military, and commercial ships and vessels. It operates through the following segments: Ship Building, Military Support Services, Commercial Ship Repair, and Combat Systems Integration. The Ship Building segment includes construction of military and commercial vessels. The Military Support Services segment consists upgrades, maintenance, repairs and overhaul of military vessels and integrated support services. The Commercial Ship Repair involves upgrades, maintenance, repairs and overhaul of commercial vessels. The Combat Systems Integration segment comprises import and commissioning of integrated systems and computer programs. The company was founded on July 12, 1995 and is headquartered in Abu Dhabi, United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:19:19.397Z",
                },
            },
            {
                score: 1,
                highlights: null,
                document: {
                    ISIN: "AEA001001014",
                    Name: "Abu Dhabi Aviation Co.",
                    Ticker: "ADAVIATION",
                    StockExchange: "Abu Dhabi Securities Exchange",
                    GICSSector: "Industrials",
                    GICSIndustryGroup: "Transportation",
                    GICSIndustry: "Air Freight & Logistics",
                    MarketCapRange: "500M - 1B",
                    MarketCap: 961400000,
                    EliminateStatus: "Pass",
                    AbortionIssues: [],
                    AdultEntertainmentIssues: [],
                    AlcoholIssues: [],
                    CannabisIssues: [],
                    GamblingIssues: [],
                    PredatoryLendingIssues: [],
                    SevereEthicsControversiesIssues: [],
                    TobaccoIssues: [],
                    Description:
                        "Abu Dhabi Aviation Co. owns and operates helicopter and fixed-wing aircrafts. It operates through the following segments: Helicopter and Fixed Wing Operations, Commercial Aircraft Operations, Air Cargo, and Investments. The Helicopter and Fixed Wing Operations segment provides charter flights and third party maintenance services. The Commercial Aircraft Operations segment deals with commercial air transportation and aircraft management. The Air Cargo segment offers air cargo services to local and international customers using its fleet of aircrafts and chartered aircraft. The Investments segment manages investment portfolios. The company was founded in 1976 and is headquartered in Abu Dhabi, the United Arab Emirates.",
                    LastUpdated: "2023-03-12T09:20:25.168Z",
                },
            },
        ],
        count: 85214,
    };
    const dataS = React.useMemo(() => data.results, []);
    const [tempFilterData, setTempFilterData] = useState(data.results);
    const [finallyFilterData, setFinallyFilterData] = useState(data.results);
    const [drop, setDrop] = useState(false);
    const [tableData, setTableData] = useState([]);
    const handleSaveResultModal = () => {
        setSaveModal(true);
    };
    const handleShareModal = () => {
        setShareModal(true);
    };
    const handleEditView = () => {
        setEditView(true);
    };
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const toggleStockOpen = () => {
        setStockOpen(!stockOpen);
    };
    const dropDownValue = useSelector((state) => state.IssuerList.userReview.dropdownSelection);

    const onChange = (e) => {
        const t = e.target.name;
        let newChecked = [];
        if (checked.includes(t)) {
            newChecked = checked.filter((item) => item !== t);
            setChecked(newChecked);
        } else {
            newChecked = [...checked, t];
            setChecked(newChecked);
        }
        let tempArrData = [];
        if (newChecked && newChecked.length > 0) {
            newChecked.forEach((cheatActivated) => {
                const tempVar = dataS.filter((listObj) => listObj.document.GICSSector === cheatActivated);
                if (tempVar && tempVar?.length) {
                    tempArrData = [...tempArrData, ...tempVar];
                    setTempFilterData(tempArrData.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : Number(b.id) > Number(a.id) ? -1 : 0)));
                }
            });
        } else {
        console.log(newChecked);
            if (dropDownValue !== "") {
                setTempFilterData([...tempFilterData]);
            } else {
                setTempFilterData([...data.results]);
            }
        }
        dispatch(checkBoxChecked(newChecked));
    };
    const onChange1 = (e) => {
        const t = e.target.name;
        let newChecked = [];
        if (checked.includes(t)) {
            newChecked = checked.filter((item) => item !== t);
            setChecked(newChecked);
        } else {
            newChecked = [...checked, t];
            setChecked(newChecked);
        }
        let tempArrData = [];
        if (newChecked && newChecked.length > 0) {
            newChecked.forEach((cheatActivated) => {
                const tempVar = dataS.filter((listObj) => listObj.document.Ticker === cheatActivated);
                if (tempVar && tempVar?.length) {
                    tempArrData = [...tempArrData, ...tempVar];
                    setTempFilterData(tempArrData.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : Number(b.id) > Number(a.id) ? -1 : 0)));
                }
            });
        } else {
            console.log(newChecked);
            if (dropDownValue !== "") {
                setTempFilterData([...tempFilterData]);
            } else {
                setTempFilterData([...data.results]);
            }
        }
        dispatch(checkBoxChecked(newChecked));
    };
    const Label = styled.label`
        padding: 5px;
        margin: 0 0 0px;
        display: block;

        :hover {
            background: #eee;
            cursor: pointer;
        }
    `;
    useEffect(() => {
        //GetIssuerList();
        setTotal(data);
    }, []);
    const dropOpen = () => {
        setDrop(!drop);
        console.log(drop, "drop");
    };
    return (
        <React.Fragment>
            <Tab.Group>
                <div className="flex justify-between px-4 pt-4 border-b">
                    <div className="pb-4">
                        <h1 className="text-2xl">Issuer</h1> <p>Good Morning! John Smith</p>
                    </div>
                    <div className="text-white gap-4 flex ml-auto inline-flex">
                        <h1 className="text-dark whitespace-nowrap">Existing View:</h1>
                        <select
                            id="underline_select"
                            class="block w-full text-sm text-gray-500 bg-transparent border-0 -mt-1 mb-10 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        >
                            <option selected>Default</option>
                            {dropDownArray.map((dropitem)=>{
                                return <option value={dropitem}>{dropitem}</option>
                            })}
                        </select>
                        {/* <div className="relative inline-block text-left">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-2 text-sm font-medium text-gray-700 bg-white"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                                onClick={() => setDrop(!drop)}
                            >
                                Options
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-6 dark:text-dark"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {drop && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                            Edit
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div> */}
                        <div className="text-dark">|</div>
                        <Link className=" items-center text-primary whitespace-nowrap" to="/issuerdetails">
                            Export
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary whitespace-nowrap" onClick={handleEditView}>
                            {" "}
                            Edit View
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary whitespace-nowrap" onClick={handleShareModal}>
                            {" "}
                            Share
                        </Link>
                        <div className="text-dark">|</div>
                        <Link className="items-center text-primary whitespace-nowrap flex-end" onClick={handleSaveResultModal}>
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
                                            setFinallyFilterData([...data.results]);
                                            setChecked([]);
                                            dispatch(dropDownSelection(""));
                                        }}
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setFinallyFilterData(tempFilterData);
                                        }}
                                    >
                                        Apply
                                    </Button>
                                    <Disclosure>
                                        <Disclosure.Button className="flex items-center gap-1 py-2" onClick={toggleOpen}>
                                            {isOpen ? <ChevronDownIcon className={"w-4"} /> : <ChevronRightIcon className={"w-4"} />} GICSSECTOR
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pl-5 flex flex-col gap-2">
                                            <React.Fragment>
                                                {options &&
                                                    Object.keys(options).length > 0 &&
                                                    Object.entries(options).map(([option, count], i) => (
                                                        <Label key={i} htmlFor={option}>
                                                            <input
                                                                type="checkbox"
                                                                name={option}
                                                                id={option}
                                                                checked={checked?.includes(option)}
                                                                onChange={onChange}
                                                            />
                                                            {option} ({count})
                                                        </Label>
                                                    ))}
                                            </React.Fragment>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="flex items-center gap-1 py-2" onClick={toggleStockOpen}>
                                            {stockOpen ? <ChevronDownIcon className={"w-4"} /> : <ChevronRightIcon className={"w-4"} />} STOCKEXCHANGE
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pl-5 flex flex-col gap-2">
                                            <React.Fragment>
                                                {stockOptions &&
                                                    Object.keys(stockOptions).length > 0 &&
                                                    Object.entries(stockOptions).map(([option, count], i) => (
                                                        <Label key={i} htmlFor={option}>
                                                            <input
                                                                type="checkbox"
                                                                name={option}
                                                                id={option}
                                                                checked={checked?.includes(option)}
                                                                onChange={onChange1}
                                                            />
                                                            {option} ({count})
                                                        </Label>
                                                    ))}
                                            </React.Fragment>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                </div>
                            </div>
                            <div className="h-full w-full p-4">
                                <h1 className="text-xl mb-4">User Review</h1>
                                {/* <InterceptorInstance />     */}
                                <TailwindTable
                                    columns={columns}
                                    data={finallyFilterData}
                                    setTableData={setTableData}
                                    tableData={tableData}
                                    setCount={setCount}
                                    count={count}
                                    total={total}
                                />
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <UserContext.Provider value={{ saveModal, setSaveModal, shareModal, setShareModal, editView, setEditView }}>
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
            </UserContext.Provider>
        </React.Fragment>
    );
};
export default IssuerList1;
