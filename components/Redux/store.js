import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist'

import UserReducer from "./user"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1
}

const reducer = combineReducers({
  user: UserReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
});

export default store;