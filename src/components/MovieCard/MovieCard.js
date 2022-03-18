import React from 'react'
import { Link } from 'react-router-dom';
import "./MovieCard.scss";
import notfound from "../../images/notfound.jpg"
const MovieCard = (props) => {
  const {data} = props;
  const poster = data.Poster.length !== 3?data.Poster:notfound;
  console.log(data.Poster.length)
  console.log(poster)
  return (
    <div className="card-item">
    <Link to={`/movie/${data.imdbID}`}>
      <div className="card-inner">
        <div className="card-top">
          <img src={poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default MovieCard