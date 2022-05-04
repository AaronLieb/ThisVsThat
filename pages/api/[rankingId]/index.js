import { query, queryAll } from "../../../helpers/db";
import { Database } from "sqlite3";

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const db = new Database("./database/main.db");

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405); // 405 Method not allowed

  const { rankingId } = req.query;

  const choices = await query(db, "SELECT * FROM Choice WHERE ranking = ?", rankingId);

  if (!choices || choices.length <= 1)
    return res.status(400).json({ msg: "Not enough choices" });

  let c1 = randInt(0, choices.length);
  let c2 = c1;
  while (c2 == c1) {
    c2 = randInt(0, choices.length);
  }

  const result = {
    choices: [
      { id: choices[c1].id, text: choices[c1].text },
      { id: choices[c2].id, text: choices[c2].text },
    ],
  };

  res.status(200).json(result);
}

export default handler;
