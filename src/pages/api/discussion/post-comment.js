// POST comment

export default function handler(req, res) {
    const { userId, body } = req.body;
    userId && body ?
      res.status(200).json({ status: 200, message: "comment posted", data: req.body }) :
      res.status(400).json({ status: 400, error: "could not POST comment", data: req.body })
  }
