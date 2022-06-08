import React from "react";
import Search from "./Search";

function Header({ setSelectedPokemon }) {
  const handleBack = () => {
    setSelectedPokemon(null);
  };

  return (
    <header className="Header">
      <div className="Title" onClick={handleBack}>
        Pokedex
      </div>
      <Search setSelectedPokemon={setSelectedPokemon} />
    </header>
  );
}

export default Header;
