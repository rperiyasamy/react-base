import routerGetCall from './interceptors';

const apiGetCall = (url) => {
    return routerGetCall(url);
};

export default apiGetCall;