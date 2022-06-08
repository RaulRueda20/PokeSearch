import React, { useEffect, useState, Fragment, useCallback } from "react";
import SingleView from "./SingleView";
import Pagination from "./Pagination";
import Sprites from "./Sprites";

const List = ({ selectedPokemon, setSelectedPokemon }) => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [page, setPage] = useState(1);
  const [limits] = useState(20);
  const [offSet, setOffSet] = useState(0);

  const getAllPokemons = useCallback(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limits}&offset=${offSet}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.status !== 200) {
      if (response.status === 404) alert("Pokemon not found");
    } else {
      setAllPokemons(data?.results);
    }
  }, [limits, offSet]);

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offSet]);

  const handlePokemonView = async (url) => {
    setSelectedPokemon(url);
  };

  return (
    <main>
      {selectedPokemon === null ? (
        <>
          <h2 className="infoText">
            Hello pokemaster! Select your pokemon and see his stats
          </h2>
          <div className="containerList">
            {allPokemons?.map((pokemon, index) => {
              return (
                <Fragment key={index}>
                  <button
                    className="pokeList"
                    key={index}
                    value={pokemon.url}
                    onClick={(e) => handlePokemonView(pokemon.url)}
                  >
                    {pokemon.name}
                    <Sprites pokemonName={pokemon.name} />
                  </button>
                </Fragment>
              );
            })}
          </div>
          <Pagination
            offSet={offSet}
            setOffSet={setOffSet}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <SingleView
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </main>
  );
};

export default List;
