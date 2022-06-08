import React, { useEffect, useState, useCallback } from "react";

function Sprites({ pokemonName }) {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllPokemons = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.status !== 200) {
      setLoading(false);
      if (response.status === 404) console.log("Error loading the sprites");
    } else {
      setLoading(false);
      setPokemonSprite(data.sprites.front_default);
    }
  }, [pokemonName]);

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <img src={pokemonSprite} alt={pokemonName} />
      )}
    </>
  );
}

export default Sprites;
