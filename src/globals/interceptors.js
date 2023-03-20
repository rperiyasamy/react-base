import axios from "axios";
import ApiError from "./api-error";
import ERRORS from "./errorConstants";
import { API_BASE_URL } from "./api-url";

// const SetupInterceptors = axios.create({});
// SetupInterceptors.interceptors.request.use(
//     req => {
// 		const token = localStorage.getItem("ACCESS_TOKEN");
// 		//console.log("access token :" + token)
// 		req.baseURL = API_BASE_URL;
// 		req.headers['Content-Type'] = "application/json";
// 		req.headers.Authorization = `Bearer ${token}`;
// 		return req;},
// 	err => {
// 		const status = err.response ? err.response.status : null;
// 		if(status === 401)
// 		{
// 			//refresh token logic
// 	  			console.log("Un auhtorized");
// 		}
// 		return Promise.reject(err);}
// );

// SetupInterceptors.interceptors.response.use(
//     res => {return res;},
// 	err => {return Promise.reject(err);}
// );

// /**
//  * Set auth token as default in Axios
//  * @param token
//  */
// export default SetupInterceptors;


const headersGET = {
    "Content-Type": "application/json",
	'Authorization' : localStorage.getItem('ACCESS_TOKEN'),	
	'Access-Control-Allow-Origin': '*', 
	'Accept': 'text/plain',            
	'Access-Control-Allow-Headers': '*'
}

const headersGETWithParams = {
    //"Content-Type": "application/json;charset=utf-8",
    "Content-Type": "application/json",
	'Authorization' : localStorage.getItem('ACCESS_TOKEN'),	
	//'Access-Control-Allow-Origin': '*', 
	//'Accept-Encoding': 'gzip, deflate, br',  
    //'Accept' : 'text/html', 
    'Accept' : 'application/json',          
	//'Access-Control-Allow-Headers': '*'
}

const axiosCall = async (...args) => {
    return await axios(...args).then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        })
}



 const routerGETCall = async (endPoint) => {
    const url = API_BASE_URL + endPoint;
	// let i=1;
	// console.log('get call' + i++);
    return await axiosCall({
            method: 'get',
            url,
            headersGET,          
        })
        .then(response => {        
            return response;
        })
        .catch(error => {
            throw error;
        })
};


export const routerGETCallWithParams = async (endPoint, bodyData) => {
    const url = API_BASE_URL + endPoint;
	
    return await axiosCall({
            method: 'get',
            url,
            headersGETWithParams, 
            data: {},
            params : JSON.stringify(bodyData)         
        })
        .then(response => {        
            return response;
        })
        .catch(error => {
            throw error;
        })
};

export default routerGETCall


