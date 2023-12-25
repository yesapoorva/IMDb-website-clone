import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import DetailedPage from "./components/DetailedPage"
import WatchList from "./components/Watchlist"

import { BrowserRouter , Route , Routes } from "react-router-dom"





function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
  

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/details" element={<DetailedPage/>}></Route>
      <Route path="/watchlist" element={ <WatchList/>}></Route>
    </Routes>
    </BrowserRouter>

    <Footer/>
    </>
  )
}

export default App
