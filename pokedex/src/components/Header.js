import React from "react";
import Search from "./Search";

function Header({ setSelectedPokemon }) {
  return (
    <div className="Header">
      <div className="Title">Pokedex</div>
      <Search setSelectedPokemon={setSelectedPokemon} />
    </div>
  );
}

export default Header;
