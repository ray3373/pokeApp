import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import PokemonCard from './PokemonCard';

const PokeStats = ({pokemon}) => {
  let navigate = useNavigate(); //Function to use {useNavigate} Hook
  const [card, setCard] = useState([])

  const routeChange = (pokeName) =>{  //function to create a dynamic path for detailCard
    let path = `/detail/:${pokeName}`; 
    console.log(path)
    navigate(path);
  }

  const settingPokemon = (pokemon)=>{
    console.log(pokemon)
    setCard(pokemon)
  }


  return (
    <>
    {/* <h1>Evolutions</h1> */}
 <div>
    <PokemonCard pokemon={pokemon}/>
 </div>       
    </>
  )
}

export default PokeStats