import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeStats({ pokeId }) {
  const [pokeStadistics, setPokeStadistics] = useState(null);
  useEffect(() => {
    console.log("pokeId", pokeId);
    const getPokemonStadistics = async () => {
      if (pokeStadistics === null && pokeId !== null) {
        try {
          const response = await axios.get(
            "https://pokeapi.co/api/v2/stat/" + `${pokeId}` + "/"
          );
          setPokeStadistics(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getPokemonStadistics();
  }, [pokeId]);
  return <div>PokeStats</div>;
}

export default PokeStats;
