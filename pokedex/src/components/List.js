import React, { useEffect, useState } from "react";
import SingleView from "./SingleView";
import axios from "axios";

const List = ({ selectedPokemon, setSelectedPokemon }) => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("selectedPokemon", selectedPokemon);
    setLoading(true);
    const getAllPokemons = async () => {
      if (allPokemons === null) {
        try {
          const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/?limit=70&offset=70"
          );
          setAllPokemons(response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getAllPokemons();
  }, [allPokemons]);

  const handlePokemonView = async (e) => {
    e.preventDefault();
    const pokeUrl = e.target.value;
    try {
      const response2 = await axios.get(pokeUrl);
      setSelectedPokemon(response2.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {selectedPokemon === null ? (
        <>
          <div className="infoText">
            Hello pokemaster!, select your pokemon and see his stats
          </div>
          <div className="containerList">
            {allPokemons?.map((pokemon, index) => {
              return (
                <button
                  className="pokeList"
                  key={index}
                  value={pokemon.url}
                  onClick={(e) => handlePokemonView(e)}
                >
                  {pokemon.name}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <SingleView
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </div>
  );
};

export default List;
