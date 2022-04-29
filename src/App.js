import './App.scss';
import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="contaier"> 
        <Routes> 
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
