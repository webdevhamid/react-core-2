import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    setTeam(team + 1);
  };

  const handleRemove = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    border: "1px solid blue",
    padding: "20px",
    borderRadius: "20px",
    margin: "20px",
  };
  return (
    <div>
      <h3 style={teamStyle}>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
