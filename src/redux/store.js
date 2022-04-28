import {createStore, combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit'; 
import articleReducer from './articles/articleReducer'; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    articleReducer
  });

//   const store = configureStore({
//     reducer: rootReducer, 
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
//  });

const store = createStore(rootReducer, applyMiddleware(thunk)); 

 export default store; 