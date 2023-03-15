const { generateRandomDiscussion } = require('../../helpers')

export default function handler(req, res) {
      const messages = generateRandomDiscussion(10)

      res.status(200).json({
            status: 200,
            message: "debate retrieved",
            debate: { title: "A Debate Title", messages }
      })
}
