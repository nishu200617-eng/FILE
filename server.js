import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { goal } = req.body;

  const quests = [
    `Watch tutorial about ${goal}`,
    `Practice basics of ${goal}`,
    `Build a mini project in ${goal}`,
    `Share progress online`,
    `BOSS: Complete a full project`
  ];

  const story = `You have entered a new journey to master ${goal}. Complete missions to level up.`;

  res.json({ quests, story });
});

app.listen(5000, () => console.log("Server running"));
