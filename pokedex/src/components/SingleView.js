import React, { useEffect, useState } from "react";
import PokeStats from "./PokeStats";

function SingleView({ selectedPokemon }) {
  const [pokeId, setPokeId] = useState(null);
  useEffect(() => {
    setPokeId(selectedPokemon.id);
  }, []);

  return (
    <div className="pokeInfo">
      <h2 className="pokemonName">{selectedPokemon.name}</h2>
      <img
        className="pokemon-img"
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <ul className="pokeType">
        {selectedPokemon.types.map((type, index) => {
          return (
            <li key={index} className="listPokeTypes">
              {type.type.name}
            </li>
          );
        })}
      </ul>
      <PokeStats pokeId={pokeId} />
    </div>
  );
}

export default SingleView;
