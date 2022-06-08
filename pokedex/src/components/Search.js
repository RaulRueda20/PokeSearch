import React, { useState } from "react";

function Search({ setSelectedPokemon }) {
  const [pokeSearch, setPokeSearch] = useState("");

  const handlePokeSearch = (e) => {
    e.preventDefault();
    setSelectedPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`);
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
