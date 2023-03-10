// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { vote, user } = req.body;
  vote && user ?
    res.status(200).json({ status: 200, message: "vote successful", data: { vote, user } }) :
    res.status(400).json({ status: 400, error: "could not POST vote", data: { vote, user } })
}
