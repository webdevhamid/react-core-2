import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  //   const handleCount = () => {
  //     // setCount(count + 1);
  //     // Same
  //     // setCount(() => count + 1)

  //     setCount(count + 1);
  //   };
  const handleCountAdd = () => {
    // setCount(count + 1 )
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleCountReduce = () => {
    // setCount(count - 1);
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleCountAdd}>Add</button>
      <button onClick={handleCountReduce}>Reduce</button>
    </div>
  );
}
