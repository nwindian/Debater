// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  const { vote, user } = req.body;
  vote && user ?
    res.status(200).json({ message: "vote successful", data: { vote, user } }) :
    res.status(400).json({ error: "could not POST vote", data: { vote, user } })
}

export default handler
