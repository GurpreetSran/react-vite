import { useEffect, useState } from "react";
import "./index.css";

// gerenate array of 1 to 6
const randomArray = new Array(6).fill(0).map((_val, index) => index + 1);

// Copy Array as we need pair for each number
// And shuffle it
const doubleArray: number[] = [...randomArray, ...randomArray].sort(() =>
  Math.random() * 10 < 5 ? 1 : -1
);

/* Make a grid from double array 
[
    [][][][]
    [][][][]
    [][][][]
]
*/

type SelectedItem = {
  rowIndex: number;
  colIndex: number;
  value: number;
};

const gridArray: number[][] = [];

let counter = 0;

for (let rows = 0; rows < 3; rows++) {
  const rowItems = [];
  for (let cols = 0; cols < 4; cols++) {
    rowItems[cols] = doubleArray[counter];
    counter++;
  }
  gridArray.push(rowItems);
}

const MemoryGame: React.FC = () => {
  const [grid, setGrid] = useState(gridArray);
  const [guessedItems, setGuessedItems] = useState<SelectedItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    if (selectedItems.length === 2) {
      if (selectedItems[0].value === selectedItems[1].value) {
        setGuessedItems((guessedItems) => [...guessedItems, ...selectedItems]);
        alert("great job");
      } else {
        alert("Try again");
      }

      setSelectedItems([]);
      setGrid(structuredClone(grid));
      setTurns(turns + 1);
    }
  }, [selectedItems, guessedItems, grid, turns]);

  const onItemClick = (
    rowIndex: number,
    colIndex: number,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isMatch: boolean,
    val: number
  ) => {
    if (isMatch) {
      return;
    }

    setSelectedItems([
      ...selectedItems,
      {
        rowIndex,
        colIndex,
        value: val,
      },
    ]);

    const el = (e.target as HTMLElement).querySelector("span");

    if (el) {
      el.style.visibility = "visible";
      setTimeout(() => {
        el.style.visibility = "hidden";
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h2>Tries: {turns}</h2>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((col, colIndex) => {
              const isMatch = !!guessedItems.find((item) => item.value == col);
              return (
                <>
                  <div
                    className="gridContainer"
                    style={{ visibility: isMatch ? "hidden" : "visible" }}
                    key={`${rowIndex}${colIndex}`}
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                      onItemClick(rowIndex, colIndex, e, isMatch, col)
                    }
                  >
                    <span
                      style={{ visibility: isMatch ? "visible" : "hidden" }}
                    >
                      {col}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MemoryGame;
