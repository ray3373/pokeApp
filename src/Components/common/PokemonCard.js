import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    let navigate = useNavigate(); 
    const [pokeDetail, setPokeDetail] = useState(null)
    const routeChange = (pokeName) =>{ 
        console.log(pokeName);
        let path = `/detail/:${pokeName}`; 
        navigate(path);
    }


    const createPokemon = async(pokemon) => {
        const response = await fetch(pokemon.url);
        const pokeData = await response.json();
        setPokeDetail(pokeData);
      }

    useEffect(() => {
        createPokemon(pokemon)
    }, [])
    
    
  if (pokeDetail) {
    return (
        <>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }} onClick={()=>(routeChange(pokeDetail.name))}>
          <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>{pokeDetail.name}</h1>
          <img src={pokeDetail.sprites.other.home.front_default} alt='pokemon-img' style={{ maxWidth: "200px" }} />
          <ol style={{ listStyleType: "none", padding: "0", marginTop: "16px" }}>
            {pokeDetail.types.map((num) => (
              <li
                key={num.slot}
                style={{
                  backgroundColor: "#f2f2f2",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  margin: "4px",
                  display: "inline-block",
                }}
              >
                {num.type.name}
              </li>
            ))}
          </ol>
        </div>
      </>
      
    );
  }
};

export default PokemonCard;
