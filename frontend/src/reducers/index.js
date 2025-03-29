import{combineReducers} from 'redux';

import authReducer from './authReducer'
import postReducer from "./postReducer";
import modalReducer from "./modalReducer";


export const reducers = combineReducers({authReducer,postReducer,modalReducer})




















