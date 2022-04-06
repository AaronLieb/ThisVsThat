import { Database } from "sqlite3";

function generateRankingId() {
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
}

const db = new Database("./database/main.db");
export default function handler(req, res) {
  if (req.method !== "POST") return;
  try {
    req.body = JSON.parse(JSON.stringify(req.body));
  } catch (e) {
    return res.status(400).json({ error: `Malformed JSON: ${e}` });
  }
  if (!req.body.name)
    return res.status(400).json({ error: "Missing Ranking Name" });
  if (!req.body.choices || !req.body.choices.length)
    return res.status(400).json({ error: "Missing Ranking Choices" });
  const rankingId = generateRankingId();
  db.all("INSERT INTO Ranking (id, name) VALUES ($id, $name) ", {
    $id: rankingId,
    $name: req.body.name,
  });

  for (let choice of req.body.choices) {
    db.all(
      "INSERT INTO Choice (id, text, ranking, votes) VALUES (NULL, $text, $ranking, $votes) ",
      {
        $ranking: rankingId,
        $text: choice,
        $votes: 0,
      }
    );
  }

  res
    .status(200)
    .json({ text: "Successfully Created Ranking!", rankingId: rankingId });
}
