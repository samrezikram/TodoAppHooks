import { configureStore } from "@reduxjs/toolkit";
const createDebugger = require('redux-flipper').default; // <-- ADD THIS

import appReducer from './rootReducer'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  
  export const store = configureStore({
    reducer: {
      app: persistReducer(persistConfig, appReducer),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(createDebugger()),
  });
  export const persistor = persistStore(store);