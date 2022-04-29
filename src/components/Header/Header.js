import React,{useState,createContext,useEffect} from 'react'
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
const Myterm = createContext();
const Header = () => {
  let location = useLocation();
  const [currentLocation ,setCurrentLocation] = useState("");
  const [term,setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    if (term === ""){
      const notify = () => toast.warn("Please Enter Movie or Series!");
      notify();
      return;
    }
    dispatch(fetchAsyncMovies(term.trim()));
    dispatch(fetchAsyncShows(term.trim()));
    setTerm("");
  }
  useEffect(()=>{
    setCurrentLocation(location.pathname);
  },[location.pathname]);
  return (
    <div className='header'>
      <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            />
      <div className="logo">
      <Link to="/"><i className="fa fa-video"></i></Link>
      </div>
       {currentLocation==="/" ?(
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search ..." onChange={(e)=>setTerm(e.target.value) }/>
          <button type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
       ):
       (
       <div className='margin-10'></div>
       )}        
    </div>
  )
}
const TermProvider = () =>{
  return (
    <Myterm.Provider>
      <Home/>
    </Myterm.Provider>
  )
}
export default Header;
export {TermProvider};