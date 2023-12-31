import { useEffect, useState } from "react";

interface Todo {
  id: string;
  title: string;
}

function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    // debugger;

    const index = nums.indexOf(nums[i]);

    if (index !== i) {
      nums.splice(i, 1);
      i--;
    }
  }

  console.log(nums);

  return nums.length;
}

removeDuplicates([-1, 0, 0, 0, 0, 3, 3]);

const Pagination = () => {
  const NoOfItems = 2;

  const [allTodos, setAllTodos] = useState<Todo[]>();
  const [todos, setTodos] = useState<Todo[]>();
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setTodos(allTodos?.slice(currentPosition, NoOfItems + currentPosition));
  }, [currentPosition]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setAllTodos(data);
        if (data.length > NoOfItems) {
          setTodos(data.slice(0, NoOfItems));
        } else {
          setTodos(data);
        }
      });
  }, []);

  if (!allTodos) {
    return;
  }

  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.id + " : " + todo.title}</li>
        ))}
      </ul>
      <button
        disabled={currentPosition < 1}
        onClick={() => {
          setCurrentPosition((prevPosition) => prevPosition - NoOfItems);
        }}
      >
        Previous
      </button>
      <button
        disabled={NoOfItems + currentPosition === allTodos?.length}
        onClick={() => {
          setCurrentPosition((prevPosition) => prevPosition + NoOfItems);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
