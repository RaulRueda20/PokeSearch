import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeStats({ pokeId }) {
  const [pokeStadistics, setPokeStadistics] = useState(null);
  useEffect(() => {
    console.log("pokeId", pokeId);
  }, [pokeId]);
  return <div>PokeStats</div>;
}

export default PokeStats;
