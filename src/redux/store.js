import { configureStore } from '@reduxjs/toolkit'
import  tripSlice from './t_slice';


export const store = configureStore({
  reducer: {
    trip: tripSlice
  },
});