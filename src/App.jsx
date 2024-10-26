import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

function App() {
  const handleClick = function () {
    alert("Clicked!");
  };

  const handleAddNum = (num) => {
    alert(num + 15);
  };
  return (
    // <>
    //   <h1>React Core Concepts 2</h1>
    //   <p>This is a paragraph</p>
    //   <button onClick={handleClick}>Click</button>
    //   <button onClick={() => alert("Clicked 2")}>Click</button>
    //   <button onClick={() => handleAddNum(5)}>Add Click</button>
    //   {/* Event handler with regular function */}
    //   <button
    //     onClick={function () {
    //       alert("Regular Clicked!");
    //     }}
    //   >
    //     Regular Click
    //   </button>
    // </>

    <>
      <Posts />

      <Friends />
      {/* React useEffect() */}
      {/* <Users /> */}

      {/* State change in react */}
      <div>{/* <Counter /> */}</div>

      {/* Understand the concept of useState and react hooks  */}
      {/* <Team /> */}
    </>
  );
}

export default App;
