import React,{useState,createContext} from 'react'
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
const Myterm = createContext();
const Header = () => {
  const [term,setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    if (term === "") return alert("please Enter Search Term")
    dispatch(fetchAsyncMovies(term.trim()));
    dispatch(fetchAsyncShows(term.trim()));
    setTerm("");
  }
  return (
    <div className='header'>
      <div className="logo">
      <Link to="/"><i className="fa fa-video"></i></Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=>setTerm(e.target.value) }/>
          <button type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
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