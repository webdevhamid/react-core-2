import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

function Friends() {
  // Declare a state to hold data
  const [friends, setFriends] = useState([]);

  // useEffect with dependency array
  useEffect(() => {
    // Use fetch to load data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // Set loaded data to the state
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="friends">
      <h2>Friends: {friends.length}</h2>
      {friends.map((friend, i) => (
        // Display data to the component
        <Friend key={i} friend={friend} />
      ))}
    </div>
  );
}
export default Friends;
