import { query } from "../../../helpers/db";
import { Database } from "sqlite3";

const db = new Database("./database/main.db");

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405); // 405 Method not allowed

  const { rankingId } = req.query;

  const choices = await query(db, "SELECT * FROM Choice WHERE ranking = ?", rankingId);

  let result = choices.map((choice) => {
    let winPercent = choice.matchupsWon / choice.matchups || 0;
    return {
      id: choice.id,
      text: choice.text,
      matchups: choice.matchups,
      matchupsWon: choice.matchupsWon,
      winPercent: winPercent,
    };
  });

  res.status(200).json(result);
}

export default handler;
