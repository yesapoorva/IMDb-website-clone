// import hook to get data from route
import { useLocation } from "react-router-dom";

//import css
import "../css/DetailedPage.css";

//compnents
import Button from "../components/Button"


export default function DetailedPage() {
  //initialise locatation data
  const data = useLocation();

  //define varible for state
  const movie = data.state;
  console.log(movie);
  return (
    <div className="mainContainer">
      <div
        className="backgroundOverlay"
        style={{ backgroundImage: `url(${movie.poster})` }}
      ></div>

      <div className="detailed-page-container">
        <div className="subcontainer1">
          <h1>{movie.title}</h1>

          <div className="rating">
            <h3>Imdb rating</h3>
            <span id="ratingID">
              {/* add star svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
              </svg>
              {movie.IMDB_rating}/10
            </span>
          </div>
          <div>
            <span className="spanClass">{movie.release_year}</span>
            <span className="spanClass">{movie.type}</span>
            <span className="spanClass">{movie.duration}</span>
          </div>
        </div>

        <div className="subcontainer2">
          <div className="imgContainer">
            <img src={movie.poster} alt={movie.title}></img>
          </div>

          <div className="infoClass">
            <div className="gerneDiv">
              {movie.genre.map((gen) => (
                <span key={gen} className="gerneClass">
                  {gen}
                </span>
              ))}
            </div>
            <div className="summaryClass">
              <span>{movie.summary}</span>
            </div>

            <hr />
            <div>
              Director : <span className="spanClass">{movie.director}</span>
            </div>
            <hr />
            <div>
              Writers :{" "}
              {movie.writers.map((writer) => (
                <span className="spanClass" key={writer}>
                  {writer}
                </span>
              ))}
            </div>
            <hr />
            <div>
              Stars :{" "}
              {movie.cast.map((cast) => (
                <span className="spanClass" key={cast}>
                  {cast}
                </span>
              ))}
            </div>
            <hr />

            <div className="watchlistClass">
              {" "}
              {/* <span id="addWatchList"> + add to watchlist</span> */}
              <Button name=" + Add to Watchlist"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
