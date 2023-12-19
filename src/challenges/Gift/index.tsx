import "./index.css";

import present from "../../assets/present.jpeg";
import { useState } from "react";

type PRESENTS = {
  presents: PRESENTS[];
  id: number;
};

function canConstruct(ransomNote: string, magazine: string): boolean {
  let magazineCopy = magazine;
  for (const char of ransomNote) {
    if (magazine.includes(char)) {
      magazineCopy = magazineCopy.replace(char, "");
    } else {
      return false;
    }
  }
  return true;
}

console.log("---> ", canConstruct("aa", "ab"));

/*
console.time("Execution Time");
expensive(1 + 2);
console.timeEnd("Execution Time");
*/

const PRESENTS: PRESENTS[] = [
  {
    presents: [],
    id: 1,
  },
  {
    id: 2,
    presents: [
      {
        id: 3,
        presents: [
          {
            id: 4,
            presents: [
              { id: 5, presents: [] },
              { id: 6, presents: [] },
              { id: 7, presents: [] },
              { id: 8, presents: [] },
            ],
          },
        ],
      },
      {
        id: 9,
        presents: [],
      },
    ],
  },
  {
    id: 10,
    presents: [],
  },
];

const Gift = () => {
  const [presents, setPresents] = useState(PRESENTS);
  const onPresentClick = (currentIndex: number) => {
    setPresents((oldPresents) => {
      return oldPresents.flatMap((present, index) => {
        if (index === currentIndex) {
          return oldPresents[index].presents;
        } else {
          return present;
        }
      });
    });
  };

  return (
    <div>
      {presents.map((_val, currentIndex) => {
        return (
          <button onClick={() => onPresentClick(currentIndex)}>
            <img className="present" src={present} />;
          </button>
        );
      })}
    </div>
  );
};

export default Gift;
