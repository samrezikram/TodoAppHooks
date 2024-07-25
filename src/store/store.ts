import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import appReducer from './rootReducer';

const rootReducer = combineReducers({
    app: appReducer,
});

export const store = configureStore({
    reducer: {
        rootReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(createDebugger()),
});

