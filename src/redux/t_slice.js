import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  triplist :
  [
	{
		id: Math.random(),
		place: "Paris, France",
		poster: "https://ideogram.ai/assets/image/balanced/response/57cH04gJT8GvwWkRHK37kQ",
		poster_2: "https://ideogram.ai/assets/image/lossless/response/ByA5e6oUSUmsY_vOZDsglw",
		poster_3 : "https://ideogram.ai/assets/image/lossless/response/x7w36DhpTkGmv6a9J7EetQ",
		price: 800,
		desc: "/Descrption/ParisFance.txt"
	},
	{
		id: Math.random(),
		place: "London, England",
		poster: "https://ideogram.ai/assets/image/balanced/response/W6NKh8orQS6M40uhFAem-g",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/2DvUQQD6TauQpQaW22fYSA",
		poster_3:"https://ideogram.ai/assets/image/lossless/response/OzFawwQ6SRm_fXJwFPqCyw",
		price: 1250,
		desc: "/Descrption/LondonEngland.txt"
	},
	{
		id: Math.random(),
		place: "Rome, Italy",
		poster: "https://ideogram.ai/assets/image/balanced/response/EFFoBEqZT162dRPolAsOPA",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/2anuBk9tR-CbDr60uiSv_g",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/VDsSDGz2SeGzlDGu_bpKCw",
		price: 2000,
		desc: '/Descrption/Rome.txt'
	},
	{
		id: Math.random(),
		place: "Mexico",
		poster: "https://ideogram.ai/assets/image/lossless/response/AXgbB9OtSeCATMMqE5fIew",
		poster_2:"https://ideogram.ai/assets/image/lossless/response/EIIp5TOWSpaGRlCMU0Osdw",
		poster_3:"https://ideogram.ai/assets/image/lossless/response/9Sxr5av5T1GH_95JdiPK7g",
		price: 950,
		desc: '/Descrption/Mexico.txt'
	},
	{
		id: Math.random(),
		place: "Barcelona, Spain",
		poster: "https://ideogram.ai/assets/image/lossless/response/nzc30gSxQCORFkGv88h9cg",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/Ec5J9czaQrO9lWXYaeowRA",
		poster_3:"https://ideogram.ai/assets/image/lossless/response/lDVwJhnmTjy2ZMqjI-CYNg",
		price: 1500,
		desc: '/Descrption/Barcelona.txt'
	},
	{
		id: Math.random(),
		place: "Amsterdam, Netherlands",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/f4LYGXWpR1aN76GXK4D1mw",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/IXMW4KY1QtOzPjZp8Eu5lA",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/Zr0FkqlUQEueA_hGlfmwrw",
		price: 1800,
		desc: '/Descrption/Amsterdam.txt'
	},
	{
		id: Math.random(),
		place: "Prague, Czech Republic",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/EQVz1aDHRVOL6-l1-PqlcQ",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/-O57GNdwRrGvve7-kwouDQ",
		poster_3:"https://ideogram.ai/assets/image/lossless/response/A6q1PuhLQWOgzAVXhk0XOg",
		price: 2500,
		desc: '/Descrption/Prague.txt'
	},
	{
		id: Math.random(),
		place: "Berlin, Germany",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/OCZfXBL7RrePA6keMEPHmg",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/kawSJdqzRgOOeIulVDevTA",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/lJ43PPs2QMqFU19ra1l3AQ",
		price: 1500,
		desc: '/Descrption/Berlin.txt'
	},
	{
		id: Math.random(),
		place: "Venice, Italy",
		poster: "https://ideogram.ai/assets/image/lossless/response/sxTCeh3NQOWQ4IeX5L_m3g",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/2hHzh6KFRlqJTE4Jfn1xJw",
		poster_3:"https://ideogram.ai/assets/image/lossless/response/XNh_HvEsQGC083u87KZICQ",
		price: 2000,
		desc: '/Descrption/Venice.txt'
	},
	{
		id: Math.random(),
		place: "Budapest, Hungary",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/NZYKpdsmQJS8RtBlvEtnGQ",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/jdeaKet3Q_qhXVocyumccA",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/Hzud3vOSS-ig0tL1Lm_PLQ",
		price: 1000,
		desc: '/Descrption/Budapest.txt'
	},
	{
		id: Math.random(),
		place: "Istanbul, Turkey",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/wIPECrNlQ42QwmqzH0sb3Q",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/3HGxdrFAQ4y_F1LJSylNWQ",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/NwcnmzJcTbWBl5RhwywAzA",
		price: 1500,
		desc: '/Descrption/Istanbul.txt'
	},
	{
		id: Math.random(),
		place: "Lisbon, Portugal",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/S8r9z2NKQwSqFh8fDM_3Pg",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/NcvFZdOKQ2ixOY3214ZQxw",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/SVGW2PFbTFKzSvimrDg9zg",
		price: 1200,
		desc: '/Descrption/Lisbon.txt'
	}
	,
	{
		id: Math.random(),
		place: "Vienna, Austria",
		poster: "https://ideogram.ai/assets/progressive-image/balanced/response/hbcvbSIRQKuAMR19E-N_5w",
		poster_2:"https://ideogram.ai/assets/progressive-image/balanced/response/SJU1NNBJQomtD4PK1T6PjA",
		poster_3:"https://ideogram.ai/assets/progressive-image/balanced/response/3llZPa3iR0aEDnmlChGOLw",
		price: 1800,
		desc: '/Descrption/Vienna.txt'
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
		let index = state.triplist.findIndex((el) => el.id === action.payload.id);
		state.triplist[index] = action.payload.editedTrip;
	  },
	  Delete_Trip: (state, action) => {
		state.triplist = state.triplist.filter((el) => el.id !== action.payload);
	  }

	},
  })
  
  // Action creators are generated for each case reducer function
  export const { Add_Trip, Edit_Trip, Delete_Trip } = tripSlice.actions
  
  export default tripSlice.reducer