export default function handler(req, res) {
  res.status(200).json({ text: "This is a test!" });
}

// Send back 2 choice Id's for the given rankingId