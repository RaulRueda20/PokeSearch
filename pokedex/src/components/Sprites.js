import React, { useEffect, useState } from "react";
import axios from "axios";

function Sprites({ pokemonName }) {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  useEffect(() => {
    // console.log("pokemonName", pokemonName);
    const getPokeSprite = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + `${pokemonName}` + "/"
        );
        console.log(response.data.sprites.front_default);
        setPokemonSprite(response.data.sprites.front_default);
      } catch (error) {
        console.log(error);
      }
    };
    getPokeSprite();
  }, [pokemonName]);

  return (
    <img className="pokemon-sprites" src={pokemonSprite} alt={pokemonName} />
  );
}

export default Sprites;
