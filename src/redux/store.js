import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' ;
import wishlistsReducer from './wishlists/wishSlice';
// import rootReducer from './reducers'

const rootReducer = combineReducers({
    user:userReducer,
    wishlists:wishlistsReducer,
});


const persistConfig ={
    key:'root',
    storage,
    version:1,
}
const persistedReducer =persistReducer(persistConfig,rootReducer)

export const store =configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor=persistStore(store);