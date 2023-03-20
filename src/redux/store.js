import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/authReducer';
import { checkboxoption } from './reducers/tableReducer';



const reducer = combineReducers({
    Auth: authReducer,
    IssuerList: checkboxoption,
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
