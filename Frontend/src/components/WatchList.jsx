import "../css/watchlist.css";

//using sample data
import filmData from "../../../sample_fillm_data.json";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const watchlist = [filmData[0], filmData[1], filmData[2]];
//const watchlist = [];
export default function WatchList() {
  let isUserSignedIn = true;

  if (isUserSignedIn) {
    return (
      <>
        <h1>watchlist</h1>
        <DisplayWatchList />
      </>
    );
  } else {
    return <h3>no access</h3>;
  }
}

function DisplayWatchList() {
  return (
    <div className="main-container">
      {watchlist.length > 0 ? (
        watchlist.map((data) => <WatchListCard key={data.title} testdata={data} />)
      ) : (
        <No_data_Present />
      )}
    </div>
  );
}



function No_data_Present() {
  return (
    <div className="emptyWatchlist">
      <p>movies added in watchlist will display here</p>
    </div>
  );
}



function WatchListCard({ testdata }) {
  return (
    <div className="card-container" key={testdata.title}>
      <div className="imgDiv">
        <img src={testdata.poster}></img>
      </div>
      <div className="infoDiv">
        <p>
          <Link to="/details" state={testdata}>
            {testdata.title}
          </Link>
        </p>
        <p>Rating : {testdata.IMDB_rating}</p>
        <p>Director : {testdata.director}</p>
      </div>

      <div className="buttonDiv">
        <Button name="remove from watchlist" />
      </div>
    </div>
  );
}
