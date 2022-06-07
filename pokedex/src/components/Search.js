import React, { useEffect, useState } from "react";
import axios from "axios";

function Search({ setSelectedPokemon }) {
  const [pokeSearch, setPokeSearch] = useState("");

  useEffect(() => {}, [pokeSearch]);

  const handlePokeSearch = async (e, selectedPokemon) => {
    e.preventDefault();

    if (pokeSearch !== "") {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + `${pokeSearch}` + "/"
        );
        setSelectedPokemon(response.data);
      } catch (error) {
        alert("Pokemon not found, check the search");
      }
    }
  };

  return (
    <form className="searchForm" onSubmit={(e) => handlePokeSearch(e)}>
      <label>
        {" "}
        Search Your Pokemon
        <input
          id="pokemones"
          name="pokemones"
          type="text"
          value={pokeSearch}
          onChange={(e) => setPokeSearch(e.target.value)}
          className="inputSearch"
        />
      </label>
    </form>
  );
}

export default Search;
