import { checkBoxoptionvalue, checkBoxoptioncheck,stockcheck,stockvalue, dropDownoptionvalue, searchTextvalue, initialRowvalue, sortingData } from "../constants/tableConstants";
let initialValues = {
    userReview: {
        checkboxOption: {},
        checkedValues: [],
        stockedOption: {},
        stockedValues: [],
        searchValue: "",
        dropdownSelection: [],
        initialRowValues: [],
        sortingDataValue: [],
    },
};
export const checkboxoption = (value = initialValues, action) => {
    switch (action?.type) {
        case checkBoxoptionvalue.REQUEST:
            value.userReview.checkboxOption = {};
            return { ...value };
        case checkBoxoptionvalue.SUCCESS:
            value.userReview.checkboxOption = action?.payload?.checkboxOption;
            return { ...value };
        case checkBoxoptionvalue.ERROR:
            value.userReview.checkboxOption = {};
            return { ...value };
            case stockvalue.REQUEST:
                value.userReview.stockedOption = {};
                return { ...value };
            case stockvalue.SUCCESS:
                value.userReview.stockedOption = action?.payload?.checkboxOption;
                return { ...value };
            case stockvalue.ERROR:
                value.userReview.stockedOption = {};
                return { ...value };
        case checkBoxoptioncheck.REQUEST:
            value.userReview.checkedValues = [];
            return { ...value };
        case checkBoxoptioncheck.SUCCESS:
            value.userReview.checkedValues = action?.payload;
            return { ...value };
        case checkBoxoptioncheck.ERROR:
            value.userReview.checkedValues = [];
            return { ...value };
            case stockcheck.REQUEST:
                value.userReview.stockedValues = [];
                return { ...value };
            case stockcheck.SUCCESS:
                value.userReview.stockedValues = action?.payload;
                return { ...value };
            case stockcheck.ERROR:
                value.userReview.stockedValues = [];
                return { ...value };
        case dropDownoptionvalue.REQUEST:
            value.userReview.dropdownSelection = [];
            return { ...value };
        case dropDownoptionvalue.SUCCESS:
            value.userReview.dropdownSelection = action?.payload;
            return { ...value };
        case dropDownoptionvalue.ERROR:
            value.userReview.dropdownSelection = [];
            return { ...value };
        case searchTextvalue.REQUEST:
            value.userReview.searchValue = [];
            return { ...value };
        case searchTextvalue.SUCCESS:
            value.userReview.searchValue = action?.payload;
            return { ...value };
        case searchTextvalue.ERROR:
            value.userReview.searchValue = [];
            return { ...value };
            case initialRowvalue.REQUEST:
            value.userReview.initialRowValues = [];
            return { ...value };
        case initialRowvalue.SUCCESS:
            value.userReview.initialRowValues = action?.payload;
            return { ...value };
        case initialRowvalue.ERROR:
            value.userReview.initialRowValues = [];
            break;
            case sortingData.REQUEST:
                value.userReview.sortingDataValue = [];
                return { ...value };
            case sortingData.SUCCESS:
                value.userReview.sortingDataValue = action?.payload;
                return { ...value };
            case sortingData.ERROR:
                value.userReview.sortingDataValue = [];
                break;
        default:
            return value;
    }
};
