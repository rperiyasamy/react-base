import axios from "axios";
import ApiError from "./api-error";
import ERRORS from "./errorConstants";
import { API_BASE_URL } from "./api-url";

const headersPOST = {
    "Content-Type": "application/json",
	// 'Authorization' : localStorage.getItem('ACCESS_TOKEN'),	
	// 'Access-Control-Allow-Origin': '*', 
	// 'Accept': '*/*',            
	// 'Access-Control-Allow-Headers': '*'    
}

const axiosCall = async (...args) => {
    return await axios(...args).then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        })
}

const routerPostCall = async (endPoint, bodyData) => {
    const url = API_BASE_URL + endPoint; 
    const _data = bodyData;  
    return await axiosCall({
            method: 'post',
            url,
            headersPOST,
            data: _data
        })
        .then(response => {
            //console.log("axios res", response)
            return response;
        })
        .catch(error => {
            //throw error;
        })
};

export default routerPostCall