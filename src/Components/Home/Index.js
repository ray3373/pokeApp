import React,{useState} from "react";
import PokemonCard from "../common/PokemonCard";
import Footer from "../Layout/Footer/footer";


const Home = () => {  
  const [randomPokemon, setRandomPokemon] = useState([]);

  const total_pokemons = 1008;
  function randomGen(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function callToGenerate(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then((data) => {
        setRandomPokemon((currentData)=> [...currentData, data])
    });
  }

  function pokemonGen(){
    setRandomPokemon([])
    callToGenerate(randomGen(1,total_pokemons));
    callToGenerate(randomGen(1,total_pokemons));
    callToGenerate(randomGen(1,total_pokemons));
    callToGenerate(randomGen(1,total_pokemons));
    callToGenerate(randomGen(1,total_pokemons));
  }



  const arrPoke = Array.isArray(randomPokemon)
    ? randomPokemon.map(element => {
        return element;
      })
    : undefined;

  console.log(arrPoke)

return(
<>
<h1 style={{ display: "flex", justifyContent: "center" }}>Pokedex</h1>
<div className="Pokmon-scroll">

</div>
<div className="random-Pokemon-Genrator" style={{marginBottom:"100px"}}>
<div style={{ textAlign: "center", marginTop: "20px", padding: "0 20px" }}>
  <button onClick={pokemonGen}
  style={{
    backgroundColor: "#f44336", // Red color as the primary Pokemon color
    color: "#fff", // White text color
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    outline: "none",
  }}
  >Surprise Me</button>
</div>
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center-align the cards horizontally
  }}
>
  {randomPokemon.map((item, index) => (
    <div
      key={index}
      style={{
        width: "45%", // Display 3 cards in a row on larger screens
        maxWidth: "300px", // Adjust the max-width as needed for your design
        margin: "10px",
        padding: "0 20px",
        marginBottom: "20px"
      }}
    >
    {/* {console.log(item)} */}
      <PokemonCard pokemon={item} />
    </div>
  ))}
</div>
</div>
<div className="footer" style={{marginTop:"100px"}}>
<footer />
</div>
</>

)
};

export default Home;
