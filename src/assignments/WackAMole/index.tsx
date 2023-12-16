import { useCallback, useEffect, useState } from "react";
import "./index.css";
import Mole from "./Mole";

// Create an array of 19 elements with false
const GRID = Array.from({ length: 24 }, () => false);
GRID.push(true);

const SPEED = 900;

const WackAMole = () => {
  const [grid, setGrid] = useState(GRID);

  const [hits, setHits] = useState(0);
  const onMoleClick = useCallback(() => {
    setHits(hits + 1);
    const shuffledGrid = grid.sort(() => (Math.random() * 10 < 5 ? 1 : -1));
    setGrid([...shuffledGrid]);
  }, [hits, grid]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledGrid = grid.sort(() => (Math.random() * 10 < 5 ? 1 : -1));
      setGrid([...shuffledGrid]);
    }, SPEED);

    return () => {
      clearInterval(interval);
    };
  }, [grid]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGrid(Array(GRID.length).fill(false));
      alert("Game Over");
    }, 30000); // 1 min

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="root">
      <h2>Wack A Mole!</h2>
      <h2>Hits - {hits}</h2>
      <div className="grid-container">
        {grid.map((isActive, index) => (
          <Mole key={index} onMoleClick={onMoleClick} isActive={isActive} />
        ))}
      </div>
    </div>
  );
};

export default WackAMole;
