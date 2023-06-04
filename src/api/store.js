import { configureStore } from '@reduxjs/toolkit';
import api from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import followSlice1 from './slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfif = {
  key: 'isFollow',
  storage,
  // whitelist: ['sid', 'refreshToken', 'accessToken']
};

const persistedReducer = persistReducer(persistConfif, followSlice1);

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, followers: persistedReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export const { useGetUsersQuery, usePutUserMutation } = api;

export const persistor = persistStore(store);
