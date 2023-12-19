import { useEffect, useState } from "react";

import "./index.css";

const Checkout = () => {
  const [inputVal, setInputVal] = useState<number>(2);
  const [totalQueues, setTotalQueues] = useState<number[][]>([
    [],
    [2, 4],
    [],
    [3, 8],
    [],
  ]);

  useEffect(() => {
    const decrementInterval = setInterval(() => {
      setTotalQueues((previousQues) => {
        return previousQues.map((queue) => {
          return [queue[0] - 1, ...queue.slice(1)].filter((val) => val > 0);
        });
      });
    }, 1000);

    return () => {
      clearInterval(decrementInterval);
    };
  }, []);

  const processCheckout = () => {
    const result: number[] = [];

    for (const queue of totalQueues) {
      const total = queue.reduce((sum, val) => {
        return sum + val;
      }, 0);

      result.push(total);
    }

    const minItemsIndex = result.findIndex((n) => Math.min(...result) === n);

    setTotalQueues((previousQueues) => {
      return previousQueues.map((queue) => {
        if (queue === totalQueues[minItemsIndex]) {
          return [...queue, inputVal];
        } else {
          return queue;
        }
      });
    });
  };

  return (
    <div className="container">
      <input
        onChange={(e) => setInputVal(parseInt(e.target.value))}
        value={inputVal}
        type="number"
        placeholder="No of items"
      />{" "}
      <button onClick={processCheckout}> Checkout </button>
      <div className="grid">
        {totalQueues.map((que, index) => {
          return (
            <div key={index} className="queue">
              {que.map((customer, i) => {
                return (
                  <div key={i} className="customer">
                    {customer}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
