import React, { useState, useEffect, useCallback } from "react";

function SingleView({ selectedPokemon, setSelectedPokemon }) {
  const [pokemon, setPokemon] = useState(null);
  const handleBack = () => {
    setSelectedPokemon(null);
  };

  const fetchPokeView = useCallback(async () => {
    const response = await fetch(selectedPokemon, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status !== 200) {
      if (response.status === 404)
        alert("The Pokemon you are looking for doesn't exist");
    } else {
      setPokemon(data);
    }
  }, [selectedPokemon]);

  useEffect(() => {
    fetchPokeView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon]);

  return pokemon === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className="pokeInfo">
      <div className="pokeNameAndImg">
        <h2 className="pokemonName">{pokemon?.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
        <button className="back" onClick={() => handleBack()}>
          Back
        </button>
      </div>
      <div className="pokeType">
        <h3 className="Type">Type Of Your Pokemon:</h3>
        {pokemon?.types.map((type, index) => {
          return <p key={index}>{type.type.name}</p>;
        })}
      </div>
      <div className="pokeStats">
        <h3 className="pokemonStat">Stats Of Your Pokemon:</h3>
        <div className="stats">
          {pokemon?.stats.map((stadistics, index) => {
            return (
              <p key={index}>
                {stadistics.stat.name} : {stadistics.base_stat} pts
              </p>
            );
          })}
        </div>
      </div>
      <div className="pokeMoves">
        <h3 className="Move">Moves Of Your Pokemon:</h3>
        <div className="listMove">
          {pokemon?.moves.map((move, index) => {
            return <p key={index}>{move.move.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleView;
