import { useState } from "react";

const SIZE = 3;

const gridArray: string[][] = [];

for (let i = 0; i < SIZE; i++) {
  gridArray.push(Array.from({ length: SIZE }, () => ""));
}

function arrayChunk(arr: number[], size: number): number[][] {
  const chunked = [];

  for (let i = 0; i < arr.length; i++) {
    if (chunked.length === 0 || chunked.length === size) {
      chunked.push([arr[i]]);
    } else {
    }
  }

  /*
  SOL 2
  const result = [];
  for (let i = 0; i + size < arr.length + size; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
  */
  /*
  SOL 1  
  const result = [];
  while (size < arr.length) {
    result.push(arr.splice(0, size));
  }
  return [...result, [...arr]];
  */
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));

const Grid = () => {
  const [board, setBoard] = useState(gridArray);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "Y">("X");

  const onCellClick = (rowIndex: number, colIndex: number) => {
    console.log(rowIndex, colIndex);
    board[rowIndex][colIndex] = currentPlayer;
    setCurrentPlayer(currentPlayer === "X" ? "Y" : "X");
    setBoard([...board]);
    checkWin(board);
  };

  const checkWin = (board: string[][]) => {
    let diagonal1Str = "";
    let diagonal2Str = "";

    for (let row = 0; row < board.length; row++) {
      let rowStr = "";
      let colStr = "";
      diagonal1Str = diagonal1Str + board[row][row];
      diagonal2Str = diagonal2Str + board[row][board.length - 1 - row];

      for (let col = 0; col < board.length; col++) {
        rowStr = rowStr + board[row][col];
        colStr = colStr + board[col][row];
      }
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
      }}
    >
      {board.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {row.map((cell, colIndex) => {
              return (
                <div
                  style={{
                    height: "30px",
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                  }}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                  key={colIndex}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
