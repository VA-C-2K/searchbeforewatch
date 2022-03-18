import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getIsLoading ,getTerm} from '../../features/movies/movieSlice';
import Spinner from 'react-spinner-material';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";
    const isLoading = useSelector(getIsLoading);
    const term = useSelector(getTerm);

    useEffect(() =>{
      if (term === ""){
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
      }else{
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
      }
    },[dispatch,term]);

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