import React, { useEffect, useState } from "react";
import PokeStats from "./PokeStats";

function SingleView({ selectedPokemon, setSelectedPokemon }) {
  const [pokeId, setPokeId] = useState(null);
  useEffect(() => {
    console.log(selectedPokemon);
    setPokeId(selectedPokemon?.id);
  }, []);

  const handleBack = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="pokeInfo">
      <div className="pokeNameAndImg">
        <h1 className="pokemonName">{selectedPokemon?.name}</h1>
        <img
          className="pokemon-img"
          src={selectedPokemon?.sprites?.front_default}
          alt={selectedPokemon?.name}
        />
        <button className="back" onClick={() => handleBack()}>
          Back
        </button>
      </div>
      <div className="pokeType">
        <h3 className="Type">Type Of Your Pokemon:</h3>
        {selectedPokemon?.types.map((type, index) => {
          return <p key={index}>{type.type.name}</p>;
        })}
      </div>
      <div className="pokeStats">
        <h3 className="pokemonStat">Stats Of Your Pokemon:</h3>
        <div className="stats">
          {selectedPokemon?.stats.map((stadistics) => {
            return (
              <p>
                {stadistics.stat.name} : {stadistics.base_stat} pts
              </p>
            );
          })}
        </div>
      </div>
      <div className="pokeMoves">
        <h3 className="Move">Moves Of Your Pokemon:</h3>
        <div className="listMove">
          {selectedPokemon?.moves.map((move) => {
            return <p>{move.move.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleView;
