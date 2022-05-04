import { query } from "../../../helpers/db";
import { Database } from "sqlite3";

// Initialize the Database
const db = new Database("./database/main.db");

// Inside handler function:
async function handler(req, res) {
  if (req.method !== "POST") return res.status(405); // 405 Method not allowed

  const { rankingId } = req.query;
  // Check that they provided a winningVote id, and losingVote id
  // if these are invalid, return 400 Bad Request
  if (typeof req.body.winnerId === "undefined")
    return res.status(400).json({ msg: "Missing Winning Vote" }); // 400 Bad Request
  if (typeof req.body.loserId === "undefined")
    return res.status(400).json({ msg: "Missing Losing Vote" }); // 400 Bad Request

  // UPDATE query to the database, one for each vote
  // For winning vote: MatchupsWon++, matchups++;
  // For losing vote: matchups++;
  await query(
    db,
    "UPDATE Choice SET matchups = matchups + 1 WHERE ranking = $rankingId AND id = $choiceId",
    {
      $rankingId: rankingId,
      $choiceId: req.body.loserId,
    }
  ).catch((err) => {
    res.status(500).json({ msg: `Database Failure: ${err}` });
  });
  if (res.headersSent) return;

  await query(
    db,
    "UPDATE Choice SET matchups = matchups + 1, matchupsWon = matchupsWon + 1 WHERE ranking = $rankingId AND id = $choiceId",
    {
      $rankingId: rankingId,
      $choiceId: req.body.winnerId,
    }
  ).catch((err) => {
    res.status(500).json({ msg: `Database Failure: ${err}` });
  });
  if (res.headersSent) return;

  // if there was no errors: return 200 OK
  res
    .status(200)
    .json({ msg: `Successfully Voted For ${req.body.winnerId}`, rankingId: rankingId }); // 200 Created
}

export default handler;
