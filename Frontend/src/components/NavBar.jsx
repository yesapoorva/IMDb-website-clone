import "../css/NavBar.css";
import { Link } from "react-router-dom";

import { useState } from "react";

//using sample data
import filmData from "../../../sample_fillm_data.json";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="navigationDiv">
          <ul className="navList">
            <li className="IMDb_home">
              <Link className="LinkClass" to="/">
                IMDb
              </Link>
            </li>
            <SearchBar />
            <li className="navItem">
              <Link className="navItemLink" to="/watchlist">
                watchlist
              </Link>
            </li>

            <li className="navItem">
              <Link className="navItemLink" to="/">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function SearchBar() {
  //define a state hook with inital valsue as empty string
  const [searchItem, setSearchItem] = useState("");

  function handleSearch(event) {
    setSearchItem(event.target.value);
  }

  // Filter movies based on search term
  const filteredMovies = filmData.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="searchContainer">
  
      <input
        className="searchbar"
        type="text"
        placeholder="Search movies..."
        onChange={handleSearch}
        value={searchItem}
      />
      {searchItem && (
        <ul className="searchResults">


          {filteredMovies.length < 1
            ? <li>no data</li>
            :(
          filteredMovies.map((movie) => (
            <li  key={movie.id}>
              <Link  className="links" to="/details" state={movie}>
              <SearchCard  name={movie} restartMethod={setSearchItem}/>
              </Link>
              
        
              
          
            </li>
          )))}
        </ul>
      )}
    </div>
  );
}



function SearchCard( props) {

  return(

    <div className="searchCard" onClick={()=> props.restartMethod("")}>
      <div className="imgSection">
        <img src={props.name.poster} alt={props.name.title}></img>
      </div>
      <div className="info">
        <span className="item">{props.name.title}</span>
        <span className="item">{props.name.cast.map((e)=> <span> {e} </span>)}</span>
        <span className="item">{props.name.release_year}</span>
      </div>
    </div>
  )
}