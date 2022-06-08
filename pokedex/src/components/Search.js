import React, { useEffect, useState } from "react";

function Search({ setSelectedPokemon }) {
  const [pokeSearch, setPokeSearch] = useState("");

  useEffect(() => {}, [pokeSearch]);

  const handlePokeSearch = async (e) => {
    e.preventDefault();

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
