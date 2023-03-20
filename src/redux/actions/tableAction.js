import { checkBoxoptionvalue, checkBoxoptioncheck,stockvalue,stockcheck, dropDownoptionvalue, searchTextvalue, initialRowvalue, sortingData } from "../constants/tableConstants";
// Action Creators
export const checkBoxoption = (checkboxOption) => async (dispatch) => {
    await dispatch({
        type: checkBoxoptionvalue.SUCCESS,
        payload: { checkboxOption },
    });
};
export const checkBoxChecked = (checkedValues) => async (dispatch) => {
    await dispatch({
        type: checkBoxoptioncheck.SUCCESS,
        payload: checkedValues,
    });
};
export const stockValueoption = (checkboxOption) => async (dispatch) => {
    await dispatch({
        type: stockvalue.SUCCESS,
        payload: { checkboxOption },
    });
};
export const stockValueChecked = (checkedValues) => async (dispatch) => {
    await dispatch({
        type: stockcheck.SUCCESS,
        payload: checkedValues,
    });
};
export const dropDownSelection = (dropdownSelection) => async (dispatch) => {
    await dispatch({
        type: dropDownoptionvalue.SUCCESS,
        payload:  dropdownSelection ,
    });
};
export const searchValue = (searchSelection) => async (dispatch) => {
    await dispatch({
        type: searchTextvalue.SUCCESS,
        payload: { searchSelection },
    });
};
export const initialRowValue = (initialValues) => async (dispatch) => {
    await dispatch({
        type: initialRowvalue.SUCCESS,
        payload: initialValues,
    });
};
export const sortingDataValue = (sortValues) => async (dispatch) => {
    await dispatch({
        type: sortingData.SUCCESS,
        payload: sortValues,
    });
};