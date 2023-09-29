import Footer from "./Components/Layout/Footer/footer";
import Header from "./Components/Layout/Header/Header";
import Home from "./Components/Home/Index";
import Region from "./Components/Region/Index";
import Type from "./Components/Type/Index"
import PokeDetailCard from "./Components/common/pokeDetailCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import KantoPokemon from "./Components/Region/KantoRegion/Kanto";

function App() {

  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/region" element={<Region />}> </Route>
        <Route exact path="/type" element={<Type />} ></Route>
        <Route exact path="/detail/:pokemon" element={<PokeDetailCard />} ></Route>
        <Route exact path="/region/kantoregion" element={<KantoPokemon />} ></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
    )
  // return (
  //   <>
  //   <Header/>
  //   <Router>
  //       <Routes>
  //         {/* This route is for home component 
  //         with exact path "/", in component props 
  //         we passes the imported component*/}
  //         <Route exact path="/" element={<Navigate replace to="/home" />
  //       </Routes>
  //     </Router>
  //   <Footer/>
  //   </>
  // );
}

export default App;
