import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import axiosInstance from "../../../utils/axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchdata() {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }fetchdata();
  }, [fetchUrl]);

  const handlerClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("V"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row_posters">
        { movies?.map((movie) => (

            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name ||
                movie.title ||
                movie.original_name ||
                movie.original_title}
              onClick={() => handlerClick(movie)} />

        ))}
      </div>
      <div style={{ padding: "10px" }}>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={{ height: "390", width: "100%", playeVars: { autoplay: 1 } }}
          />
        )}
      </div>
    </div>
  );
}
export default Row;


