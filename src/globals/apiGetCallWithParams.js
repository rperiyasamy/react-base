import routerGETCallWithParams from './interceptors';

const apiGetCallWithParams = (url) => {
    return routerGETCallWithParams(url);
};

export default apiGetCallWithParams;