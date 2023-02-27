export default function handler(req, res) {
      res.status(200).json({ status: 200, message: "retrieved vote", data: { vote: "agree" } })
  }
  