import React,{useEffect, useState} from "react";
import PokemonCard from "../common/PokemonCard";
const Home = () => {
  //Hook to store pokemon data
  const [allPokemons, setallPokemons] = useState([]);


const getRandomPokemon = async () =>{ 
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`)
	const data = await res.json()
	setallPokemons(data.results)
}

  
//Auto-Calling the function after data is fetched
useEffect(()=>{
	getRandomPokemon()
}, []);


return(
<>
  <h1 style={{display:"flex",justifyContent:"center"}}>Pokedex</h1>
  <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
  {allPokemons.map((item, index) => (
    <div
      key={index}
      style={{
        width: "30%", // Adjust the width as needed to fit three cards on the screen
        margin: "10px",
      }}
    >
      <PokemonCard pokemon={item} />
    </div>
  ))}
</div>

</>
)
};

export default Home;
