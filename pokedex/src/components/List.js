import React, { useEffect, useState } from "react";
import SingleView from "./SingleView";
import axios from "axios";

const List = () => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [allPokeImages, setAllPokeImages] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllPokemons = async () => {
      if (allPokemons === null) {
        try {
          const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
          setAllPokemons(response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    };

    // const getAllPokeImage = async () => {
    //   if (allPokemons !== null) {
    //     const pokeName = allPokemons.map((pokemons) => {
    //       return pokemons.name;
    //     });
    //     try {
    //       const response2 = await axios.get(
    //         "https://pokeapi.co/api/v2/pokemon/" + `${pokeName}`
    //       );
    //       console.log("response2", response2);
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // };

    getAllPokemons();
    // getAllPokeImage();
  }, [allPokemons]);

  const handlePokemonView = async (e) => {
    e.preventDefault();
    const pokeUrl = e.target.value;
    // console.log("pokeUrl", pokeUrl);
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
        <SingleView selectedPokemon={selectedPokemon} />
      )}
    </div>
  );
};

export default List;
