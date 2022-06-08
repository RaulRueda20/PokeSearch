import React from "react";
import Search from "./Search";

function Header({ setSelectedPokemon }) {
  const handleBack = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="Header">
      <div className="Title" onClick={handleBack}>
        Pokedex
      </div>
      <Search setSelectedPokemon={setSelectedPokemon} />
    </div>
  );
}

export default Header;
