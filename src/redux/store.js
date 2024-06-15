import { configureStore } from '@reduxjs/toolkit'
import  tripSlice from './t_slice';
import BlogSlice from './BlogSlice';


export const store = configureStore({
  reducer: {
    trip: tripSlice,
    blog: BlogSlice
  },
});