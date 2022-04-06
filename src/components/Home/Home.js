import React, { useLayoutEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getIsLoading ,getTermMovie,getTermSeries, removeSelectedMovieOrShow} from '../../features/movies/movieSlice';
import Spinner from 'react-spinner-material';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";
    const isLoading = useSelector(getIsLoading);
    const termMovie = useSelector(getTermMovie);
    const termSeries = useSelector(getTermSeries);

    useLayoutEffect(() =>{
      if (termMovie === "" || termSeries === ""){
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
      }else{
        dispatch(fetchAsyncMovies(termMovie));
        dispatch(fetchAsyncShows(termSeries));
      }
      return () => {
        dispatch(removeSelectedMovieOrShow());
      }
    },[dispatch]);

  return (
    <div>
    <div className="banner-img"></div>
    {isLoading==="True"? (
      <>
        <Spinner radius={220} color={"#79b8f3"} stroke={5} visible={true} />
        </>
        ) : (
      <MovieListing/>
      )}
    </div>
  )
}

export default Home;