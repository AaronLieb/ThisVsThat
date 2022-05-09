import { query } from "../../../helpers/db";
import { Database } from "sqlite3";

const containsPerm = (src, check) => {
  console.log(src, check)
  for (let pair of src) {
    if ((pair[0] == check[0] && pair[1] == check[1]) || (pair[0] == check[1] && pair[1] == check[0])) return true;
  }
  return false;
};

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const db = new Database("./database/main.db");

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405); // 405 Method not allowed

  const { rankingId } = req.query;

  if (req.body.prev === undefined || !(req.body.prev instanceof Array))
    return res.status(400).json({ msg: "Missing Previous Votes" }); // 400 Bad Request

  const choices = await query(db, "SELECT * FROM Choice WHERE ranking = ?", rankingId);

  if (!choices || choices.length <= 1) return res.status(400).json({ msg: "Not enough choices" });


  const numPermutations = (choices.length * (choices.length - 1))/2;
  const outOfChoices = req.body.prev.length == numPermutations;

  let c1, c2;
  for (let redo = !outOfChoices; redo; redo = containsPerm(req.body.prev, [choices[c1].id, choices[c2].id])) {
    c1 = randInt(0, choices.length);
    c2 = c1;
    while (c2 == c1) {
      c2 = randInt(0, choices.length);
    }
  }

  const result = {
    outOfChoices: outOfChoices,
    choices: outOfChoices ? [] : [choices[c1], choices[c2]],
  };

  res.status(200).json(result);
}

export default handler;
