import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";
import axios from "axios";

const MovieOverview = (props) => {
  const [movies, setMovies] = useState([]);

        const history = useHistory();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(
      "https://hermes.telekurier.at/api/v1/cfs/collection/codebase_challenge"
    );
    console.log(response.data.items);
    setMovies(response.data.items);
  };

  const movieDetails = (movie) => {
    props.actions.storeMovieName(movie);
    history.push(`/movie${movie}`);
  };

  return (
    <div>
      <thead>
        <tr>
          <td>Poster</td>
          <td>Title</td>
        </tr>
      </thead>
      
      <tbody>
        {movies.map((movie) => {
          return (
            <tr>
              <td>
                <img
                  src={"https://hermes.telekurier.at" + movie.poster.url}
                  style={{ width: "100px" }}
                  alt={"poster"}
                />
              </td>
              <td> {movie.title} </td>
              {movie.genres.map((genre) => {
                return <span>{genre.name}, </span>;
              })}
              <td>
                {movie.teaser_img ? <img src={movie.teaser_img.url} /> : null}
              </td>
              <td>
                {movie.teaser_video ? (
                  <video
                    src={movie.teaser_video.video_url}
                    controls
                    style={{ height: "200px" }}
                  />
                ) : null}
              </td>
              <td> {movie.teaser_text} </td>
              <button onClick={() => movieDetails(movie.url)}>click</button>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieOverview);