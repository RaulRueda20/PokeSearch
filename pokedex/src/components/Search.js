import React, { useState, useCallback } from "react";

function Search({ setSelectedPokemon }) {
  const [pokeSearch, setPokeSearch] = useState("");

  const fetchSearch = useCallback(async () => {
    if (pokeSearch !== "") {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + `${pokeSearch}` + "/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.status !== 200) {
        if (response.status === 404) alert("Pokemon not found, try again");
      } else {
        setSelectedPokemon(data);
      }
    }
  }, [pokeSearch]);

  const handlePokeSearch = (e) => {
    e.preventDefault();
    fetchSearch();
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
