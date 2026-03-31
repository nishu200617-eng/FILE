import React, { useState } from "react";
import axios from "axios";

function App() {
  const [goal, setGoal] = useState("");
  const [quests, setQuests] = useState([]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [story, setStory] = useState("");

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/generate", {
      goal,
      xp,
    });

    setQuests(res.data.quests);
    setStory(res.data.story);
  };

  const completeQuest = () => {
    const newXP = xp + 20;
    setXp(newXP);

    if (newXP >= level * 100) {
      setLevel(level + 1);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Reality Gamifier</h1>

      <input
        placeholder="Enter your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button onClick={generate}>Start</button>

      <h2>Level: {level} | XP: {xp}</h2>

      <div style={{ background: "#ccc", height: 10 }}>
        <div style={{ width: `${xp % 100}%`, background: "green", height: 10 }} />
      </div>

      <p>{story}</p>

      {quests.map((q, i) => (
        <div key={i}>
          <p>{q}</p>
          <button onClick={completeQuest}>Complete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
