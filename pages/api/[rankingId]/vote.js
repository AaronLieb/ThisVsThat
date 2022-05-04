import { query } from "../../helpers/db";
import { Database } from "sqlite3";

export default function handler(req, res) {
  res.status(200).json({ text: "This is a test!" });
}


// Initialize the Database
const db = new Database("./database/main.db");

// Inside handler function: 
async function handler(req, res) {
  if (req.method !== "POST") return res.status(405); // 405 Method not allowed
  try {
    // Parse the JSON
    req.body = JSON.parse(JSON.stringify(req.body));
  } catch (err) {
    return res.status(400).json({ msg: `Malformed JSON: ${err}` }); // 400 Bad Request
  }
  // Check that they provided a winningVote id, and losingVote id
  // if these are invalid, return 400 Bad Request
  if (!req.body.id) return res.status(400).json({ msg: "Missing Winning Vote" }); // 400 Bad Request
  if (!req.body.id) return res.status(400).json({ msg: "Missing Losing Vote" }); // 400 Bad Request

  // UPDATE query to the database, one for each vote
  // For winning vote: MatchupsWon++, matchups++;
  // For losing vote: matchups++;
  await query(db, "INSERT INTO Choice (matchups, matchupsWon) VALUES ($matchups, $matchupsWon)", {
    $matchups: req.body.matchups,
    $matchupsWon: req.body.matchupsWon,
  }).catch((err) => {
    // at the end of each query, check for errors
    // if there is an error: 500 Internal Server Error
    res.status(500).json({ msg: `Database Failure: ${err}` });
  });
  if (res.headersSent) return;

  // if there was no errors: return 200 OK
  res.status(200).json({ msg: "Successfully Voted For ThisvsThat!", rankingId: rankingId }); // 200 Created
}





