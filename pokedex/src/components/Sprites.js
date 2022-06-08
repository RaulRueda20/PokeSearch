import React, { useEffect, useState } from "react";

function Sprites({ pokemonName }) {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  useEffect(() => {
    const getPokeSprite = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + `${pokemonName}` + "/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.status !== 200) {
        if (response.status === 404) console.log("Error loading the sprites");
      } else {
        setPokemonSprite(data.sprites.front_default);
      }
    };
    getPokeSprite();
  }, [pokemonName]);

  return <img src={pokemonSprite} alt={pokemonName} />;
}

export default Sprites;
