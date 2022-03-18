import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"

let termSeries,termMovie='';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    termMovie = term;
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
    termSeries = term;
    return response.data;
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
})
let isLoading='False';
const initialState ={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow ={};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:() =>{
            console.log("Pending");
            isLoading="True";
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log("Fetched Sucessfully");
            isLoading="False";
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:(state,{payload}) =>{
            console.log("Rejected");
        },
        [fetchAsyncShows.pending]:() =>{
            console.log("Pending");
            isLoading="True";
        },
        [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
            console.log("Fetched Sucessfully");
            isLoading="False";
            return {...state,shows:payload};
        },
        [fetchAsyncShows.rejected]:(state,{payload}) =>{
            console.log("Rejected");
        },
        [fetchAsyncMovieOrShowDetail.pending]:() =>{
            console.log("Pending");
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload}) =>{
            console.log("Fetched Sucessfully");
            return {...state,selectedMovieOrShow:payload};
        },
        [fetchAsyncMovieOrShowDetail.rejected]:(state,{payload}) =>{
            console.log("Rejected");
        },
    },
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getIsLoading = (state) => isLoading;
export const getTermMovie = (state) => termMovie;
export const getTermSeries = (state) => termSeries;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;