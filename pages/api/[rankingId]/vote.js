import { query } from "../../helpers/db";
import { Database } from "sqlite3";

export default function handler(req, res) {
  res.status(200).json({ text: "This is a test!" });
}


// Initialize the Database

// Inside handler function: 
// Parse the JSON
// Check that they provided a winningVote id, and losingVote id 
// if these are invalid, return 400 Bad Request
// UPDATE query to the database, one for each vote
// For winning vote: MatchupsWon++, matchups++;
// For losing vote: matchups++;
// at the end of each query, check for errors
// if there is an error: 500 Internal Server Error
// if there was no errors: return 200 OK




