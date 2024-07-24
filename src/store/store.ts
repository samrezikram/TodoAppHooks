import { configureStore } from '@reduxjs/toolkit';
const createDebugger = require('redux-flipper').default;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';
import appReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

export const store = configureStore({
    reducer: {
        app: appReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(createDebugger())
});
export const persistor = persistStore(store);
