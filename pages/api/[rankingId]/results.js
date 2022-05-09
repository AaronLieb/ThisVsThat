import { query } from "../../../helpers/db";
import { Database } from "sqlite3";

const db = new Database("./database/main.db");

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405); // 405 Method not allowed

  const { rankingId } = req.query;

  const choices = await query(db, "SELECT * FROM Choice WHERE ranking = ?", rankingId);

  const name = (await query(db, "SELECT name FROM Ranking WHERE id = ?", rankingId))[0].name;

  let results = choices.map((choice) => {
    let winPercent = choice.matchupsWon / choice.matchups || 0;
    return {
      id: choice.id,
      text: choice.text,
      matchups: choice.matchups,
      matchupsWon: choice.matchupsWon,
      winPercent: winPercent,
    };
  });

  res.status(200).json({name: name, results: results});
}

export default handler;
