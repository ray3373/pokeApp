import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ pokemon }) => {
  let navigate = useNavigate(); 
  const [randomPokeDetail, setRandomPokeDetail] = useState("");

  const routeChange = (pokeName) => {
    let path = `/detail/:${pokeName}`;
    navigate(path);
  };

  function settingData(data) {
    setRandomPokeDetail(data);
  }

  
  useEffect(() => {  
    settingData(pokemon);
  }, [pokemon]);

  if (randomPokeDetail) {
    return (
      <>
        <div className="randomPokemon" style={{marginBottom:"100px"}}>
          <div
            className="pokemon"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
            onClick={() => routeChange(randomPokeDetail.name)}
          >
            <h1
              style={{
                fontSize: "24px",
                marginBottom: "16px",
                textTransform: "capitalize",
              }}
            >
              {randomPokeDetail.name}{" "}
            </h1>
            <img
              src={randomPokeDetail.sprites.other.home.front_default}
              alt="pokemon-img"
              style={{ maxWidth: "200px" }}
            />
            <ol
              style={{ listStyleType: "none", padding: "0", marginTop: "16px", }}
            >
              {randomPokeDetail.types.map((num) => (
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
        </div>
      </>
    );
  }
};

export default PokemonCard;
