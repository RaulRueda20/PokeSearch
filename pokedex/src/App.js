import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <div className="App">
      <Header setSelectedPokemon={setSelectedPokemon} />
      <List
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
