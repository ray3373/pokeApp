"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'


function KantoPokemon() {
  //Hook to store pokemon data
    const [allPokemons, setallPokemons] = useState([]);
    // const [regionFirst, setRegionFirst] = useState()
    // const [regionSecond, setRegionSecond] = useState()
    // const [regionThird, setRegionThird] = useState()
    // let count = 1;


  //fetching data and storing it
  const getAllPokemons = async () =>{ 
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    const data = await res.json()
    console.log(data);
    createPokemon(data.results);
  }
  
  const createPokemon = (result) => {
    result.forEach(async(pokemon) => {
      const response = await fetch(pokemon.url);
      const pokeData = await response.json();
      setallPokemons((currentList) => [...currentList, pokeData]);
    });
  }

  useEffect(()=>{
      getAllPokemons()
    }, []);


return(
  <>
    {/* <h1>Pokedex</h1> */}
    <div>
    {/* <Header /> */}
      {allPokemons.map((pokemon,index)=>
      <div key={pokemon.id}>
      <h1>{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other.home.front_default} alt='pokemon-img'/>
      <ol>{pokemon.types.map((num)=>
      <li key={num.slot}>{num.type.name}</li>
      )}</ol> 
      </div>,
      )}
    </div>
  </>
)
}

export default KantoPokemon;