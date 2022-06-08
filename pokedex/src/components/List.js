import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleView from "./SingleView";
import Pagination from "./Pagination";
import Sprites from "./Sprites";

const List = ({ selectedPokemon, setSelectedPokemon }) => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [page, setPage] = useState(1);
  const [limits] = useState(20);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=" +
            `${limits}` +
            "&offset=" +
            `${offSet}`
        );
        setAllPokemons(response?.data?.results);
      } catch (error) {
        console.log(error);
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
                <>
                  <button
                    className="pokeList"
                    key={index}
                    value={pokemon.url}
                    onClick={(e) => handlePokemonView(e)}
                  >
                    {pokemon.name}
                    <Sprites key={index + 1} pokemonName={pokemon.name} />
                  </button>
                </>
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
    </div>
  );
};

export default List;
