import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import PokemonCard from "./PokemonCard";
import PokeStats from "./PokeStats";

const PokeDetailCard = ({ props }) => {
  let params = useParams();
  let navigate = useNavigate(); //Function to use {useNavigate} Hook
  const [card, setCard] = useState("");
  const [evolutions, setEvolutions] = useState([]);
  const [description, setDescription] = useState([]);
  const [evolutionData, setEvolutionData] = useState({});

  async function getEvolution(url) {
    const res = await fetch(url);
    const data = await res.json();
    setEvolutions(data);
  }

  async function evolutionsApi(num) {
    //getting evolution chain API from ID of pokemons
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${num.id}/`
    );
    const data = await response.json();
    getEvolution(data.evolution_chain.url);
  }

  async function createPokemonObject() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemon.split(":")[1]}`
    );
    const data = await res.json();
    evolutionsApi(data);
    return data;
  }

  function getEvolutionApi(name, key) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setEvolutionData((currentData) => {
          return { ...currentData, [key]: data };
        });
      });
  }

  const descriptionUrl = card.species;
  async function getDescriptonApi(name) {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemon.split(":")[1]}`
    );
    const data = await res.json();

    async function getDescriptoon(name) {
      const res = await fetch(`${name.species.url}`);
      const data = await res.json();
      setDescription((currentData) => {
        return { ...currentData, data };
      });
    }
    getDescriptoon(data);
    return data;
  }
  const descriptionLines = description.data?.flavor_text_entries[1].flavor_text;

  console.log(description.data);

  const routeChange = (pokeName) => {
    //function to create a dynamic path for detailCard
    let path = `/detail/:${pokeName}`;
    navigate(path);
  };

  useEffect(() => {
    //useEffect function to call the fetching function
    createPokemonObject(card).then((res) => setCard(res));
  }, []);

  useEffect(() => {
    //useEffect function to call the fetching function
    getDescriptonApi(descriptionUrl);
  }, []);

  useEffect(() => {
    const evoSecond = evolutions.chain?.evolves_to[0]?.species.name;
    const evoFirst = evolutions.chain?.species.name;
    const evoThird =
      evolutions.chain?.evolves_to[0]?.evolves_to[0]?.species.name;
    getEvolutionApi(evoFirst, "firstEvolution");
    getEvolutionApi(evoSecond, "secondEvolution");
    getEvolutionApi(evoThird, "thirdEvolution");
  }, [evolutions]);

  const keys = Object.values(evolutionData);

  if (card) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#FFDE00",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <h1>Pokemon Details</h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          onClick={() => routeChange(card.name)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              margin: "20px",
              textTransform: "capitalize",
            }}
          >
            <img
              src={card.sprites.other.home.front_default}
              alt="pokemon-img"
              style={{ maxWidth: "300px", marginRight: "20px" }}
            />
            <div>
              <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {card.name}
              </h1>
              <div
                className="description"
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "auto", // Let the content determine the height
                  width: "300px", // Set a fixed width
                  overflowY: "auto", // Add vertical scrollbar if needed
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    lineHeight: "2",
                  }}
                >
                  {descriptionLines}
                </p>
              </div>
            </div>
          </div>
          <div
            className="PokeDetails"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              width: "300px",
            }}
          >
            <div className="Stats" style={{ flex: "1", marginRight: "10px" }}>
              <h2 style={{ marginTop: "0" }}>Pokemon Stats</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {card.stats.map((num, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: "#f2f2f2",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          margin: "4px",
                        }}
                      >
                        {num.stat.name}
                      </td>
                      <td
                        style={{
                          backgroundColor: "#f2f2f2",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          margin: "4px",
                        }}
                      >
                        {num.base_stat}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="Abilities"
              style={{ flex: "1", marginLeft: "10px" }}
            >
              <h2 style={{ marginTop: "0" }}>Pokemon Abilities</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {card.abilities.map((ability, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: "#f2f2f2",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          margin: "4px",
                        }}
                      >
                        {ability.ability.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          style={{ marginLeft: "45%", marginBottom: "20px", marginTop: "40px" }}
        >
          <h1>Evolutions</h1>
        </div>

        <div>
          {keys.length ? keys.map((item) => <PokeStats pokemon={item} />) : ""}
        </div>
      </>
    );
  }
};

export default PokeDetailCard;
