// configuration of the store using redux tolkit


import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import clientSlice from './clientSlice';
import MaterialSlice from './MaterialSlice';


export const store = configureStore({

    reducer: {
        user: userSlice,
        client: clientSlice,
        material: MaterialSlice
    },
    });
// export the store

export default store;
