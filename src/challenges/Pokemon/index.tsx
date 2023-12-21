import { useState } from "react";
import "./index.css";

interface IPokemonData {
  name: string;
  description: string;
}

const DATA: IPokemonData[] = [
  {
    name: "A great PokeMON",
    description: "A great PokeMON description",
  },
  {
    name: "B XXX",
    description: "A XXX description",
  },
  {
    name: "C MAN",
    description: "A MAN description",
  },
  {
    name: "DESTINATOO",
    description: "A  DESTINATOO description",
  },
  {
    name: "EXTRA BIG",
    description: "A BIG description",
  },
  {
    name: "F MMEEE",
    description: "A MMEEE description",
  },
];

const Pokemon = () => {
  const [currentPokemon, setCurrentPokemons] = useState(0);

  const onNextClick = () => {
    if (currentPokemon === DATA.length - 1) {
      setCurrentPokemons(0);
    } else {
      setCurrentPokemons((prevIndex) => (prevIndex = prevIndex + 1));
    }
  };

  const onPreviousClick = () => {
    if (currentPokemon === 0) {
      setCurrentPokemons(DATA.length - 1);
    } else {
      setCurrentPokemons((prevIndex) => (prevIndex = prevIndex - 1));
    }
  };

  return (
    <div className="root">
      <select
        data-testid="selection"
        value={DATA[currentPokemon].name}
        onChange={(e) => {
          const index = DATA.findIndex(
            (selectedOption) => selectedOption.name === e.target.value
          );
          setCurrentPokemons(index);
        }}
      >
        {DATA?.map((pokemon) => {
          return <option key={pokemon.name}>{pokemon.name}</option>;
        })}
      </select>

      <div className="card">
        <div data-testid="name">{DATA[currentPokemon].name}</div>
        <div>{DATA[currentPokemon].description}</div>
      </div>

      <div className="buttonsContainer">
        <button data-testid="previous" onClick={() => onPreviousClick()}>
          Previous
        </button>
        <button data-testid="next" onClick={() => onNextClick()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
