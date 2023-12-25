import "../css/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

//using sample data
//import filmData from "../../../sample_fillm_data.json";

import { useEffect, useState } from "react";

export default function Home() {
  const [apidata, getApidata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies")
      .then((res) => getApidata(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>home</h1>

      <ul>
        {apidata.map((movies) => (
          <li key={movies.title}>
            {/* pass entiremovie object through route as a state */}
            <Link to="/details" state={movies}>
              {movies.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
