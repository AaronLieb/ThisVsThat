import { query, queryAll } from "../../helpers/db";
import { Database } from "sqlite3";

// Generate an 8 digit alpha id without ambiguous letters like I and l
const generateRankingId = () => {
  let result = "";
  for (let i = 0; i < 8; i++) {
    let r = 0;
    while ([73, 105, 108, 0].includes(r)) {
      r = Math.floor(Math.random() * 26 * 2);
      if (r > 25) r += 97 - 26;
      else r += 65;
    }
    result += String.fromCharCode(r);
  }
  return result;
};

// Initialize the db connection
const db = new Database("./database/main.db");

// Handler function, called when the endpoint is hit
async function handler(req, res) {

  if (req.method !== "POST") return res.status(405); // 405 Method not allowed
  if (!req.body.name) return res.status(400).json({ msg: "Missing Ranking Name" }); // 400 Bad Request
  if (!req.body.choices?.length)
    return res.status(400).json({ msg: "Missing Ranking Choices" }); // 400 Bad Request

  const rankingId = generateRankingId();

  // Add ranking to db
  await query(db, "INSERT INTO Ranking (id, name) VALUES ($id, $name)", {
    $id: rankingId,
    $name: req.body.name,
  }).catch((err) => {
    res.status(500).json({ msg: `Database Failure: ${err}` });
  });
  if (res.headersSent) return;

  // Insert each ranking choice into DB
  const paramList = req.body.choices.map((c) => {
    return { $ranking: rankingId, $text: c, $matchups: 0, $matchupsWon: 0 };
  });
  await queryAll(
    db,
    "INSERT INTO Choice (id, text, ranking, matchups, matchupsWon) VALUES (NULL, $text, $ranking, $matchups, $matchupsWon)",
    paramList
  ).catch((err) => {
    res.status(500).json({ msg: `Database Failure: ${err}` });
  });
  if (res.headersSent) return;

  res.status(201).json({ msg: "Successfully Created Ranking!", rankingId: rankingId }); // 201 Created
}

export default handler;
