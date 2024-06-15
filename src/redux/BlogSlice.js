import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bloglist : [
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/image/lossless/response/hwT280ngQEau8fFUhy9IWg",
			type: "HOTELS",
			header: "Top 10 Hotels to Stay At: Exclusive Rating by Sealine Travel Experts",
			author: "Ahmed",
			comment: 12,
			date: "JULY 1, 2022"	
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/image/lossless/response/O7StsiMGTGGoX_bdq6eKEA",
			type: "TIPS",
			header: "How to Plan Your Vacation in Advance and Why It’s Beneficial",
			author: "Youssef",
			comment: 136,
			date: "AUG 21, 2021"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/TxvYUjbsQDe0ItigPq5GCA",
			type: "HOTELS",
			header: "Luxury Escapes: Top 5 Hotels for Ultimate Relaxation",
			author: "Layla",
			comment: 28,
			date: "MAY 5, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/SIDfl2uFTU6vOfySnjjd-Q",
			type: "TIPS",
			header: "Essential Packing List for Your Next Adventure",
			author: "Sophia",
			comment: 64,
			date: "JUNE 12, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/uRAC4tsuQMGKcMv6eQY1bQ",
			type: "HOTELS",
			header: "Hidden Gems: Best Boutique Hotels Around the World",
			author: "Gabriel",
			comment: 42,
			date: "SEP 10, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/Rk7gHKHrROyXoyZaoVeYQA",
			type: "TIPS",
			header: "Family Vacation Planning: Tips for a Stress-Free Experience",
			author: "Emily",
			comment: 89,
			date: "FEB 28, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/2YNGg3kyRK-JlFYy6O5NHw",
			type: "HOTELS",
			header: "Top 5 Budget-Friendly Hotels in Major Cities",
			author: "Daniel",
			comment: 17,
			date: "JULY 15, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/8lO3KY9XTZiKUWkqCK8Gbw",
			type: "TIPS",
			header: "Solo Travel: Essential Tips for the Independent Explorer",
			author: "Aria",
			comment: 53,
			date: "APR 7, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/xMDsyJXhTtaDt3TBaKy6sA",
			type: "HOTELS",
			header: "Luxury Retreats: Exclusive Resorts for a Lavish Getaway",
			author: "Natalie",
			comment: 31,
			date: "OCT 20, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/N9SJ149lSqK81LxYh_7vDA",
			type: "TIPS",
			header: "How to Save Money on Accommodation While Traveling",
			author: "James",
			comment: 77,
			date: "MAY 12, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/rnjdOT22THys5hYiS5nbzQ",
			type: "HOTELS",
			header: "Best Resorts with Stunning Beach Views",
			author: "Olivia",
			comment: 22,
			date: "AUG 8, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/hq3f-D2ZTjm6eqjCus2VSA",
			type: "TIPS",
			header: "Ultimate Guide to Booking Vacation Rentals",
			author: "Max",
			comment: 61,
			date: "JAN 17, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/progressive-image/balanced/response/A8lWlloqRWWdzungMnz_WQ",
			type: "HOTELS",
			header: "Charming Bed and Breakfasts: Cozy Stays for Every Budget",
			author: "Isabella",
			comment: 19,
			date: "SEP 5, 2023"
		},
		{
			id: Math.random(),
			poster: "https://ideogram.ai/assets/image/lossless/response/LCstocxRS6uZ15q22aVbTA",
			type: "TIPS",
			header: "How to Plan a Last-Minute Weekend Getaway",
			author: "Ethan",
			comment: 45,
			date: "JUN 3, 2023"
		}
	]
}

export const BlogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
		Add_Blog: (state, action) => {
			state.bloglist.push(action.payload);
		},
		Edit_Blog: (state, action) => {
			let index = state.bloglist.findIndex((el) => el.id === action.payload.id);
			state.bloglist[index] = action.payload.editedBlog;
		},
		Delete_Blog: (state, action) => {
			state.bloglist = state.bloglist.filter((el) => el.id !== action.payload);
		}
	}
});

export const { Add_Blog, Edit_Blog, Delete_Blog } = BlogSlice.actions
  
  export default BlogSlice.reducer