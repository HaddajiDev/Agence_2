import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  triplist :
  [
	{
		place: "France paris",
		poster: "https://ideogram.ai/assets/image/balanced/response/57cH04gJT8GvwWkRHK37kQ",
		price: 350
	},
	{
		place: "London England",
		poster: "https://ideogram.ai/assets/image/balanced/response/W6NKh8orQS6M40uhFAem-g",
		price: 350
	},
	{
		place: "Rome Italy",
		poster: "https://ideogram.ai/assets/image/balanced/response/EFFoBEqZT162dRPolAsOPA",
		price: 350
	},
	{
		place: "Mexico",
		poster: "https://ideogram.ai/assets/image/lossless/response/AXgbB9OtSeCATMMqE5fIew",
		price: 350
	}
  ]
}

export const tripSlice = createSlice({
	name: 'trip',
	initialState,
	reducers: {
	  Add_Trip : (state, action) => {
		state.triplist.push(action.payload);
	  },
	  Edit_Trip: (state, action) => {
		
	  }
	},
  })
  
  // Action creators are generated for each case reducer function
  export const { Add_Trip } = tripSlice.actions
  
  export default tripSlice.reducer