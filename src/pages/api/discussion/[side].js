const { generateRandomDiscussion } = require('../../../helpers')

export default function handler(req, res) {
    const { side } = req.query
    const messages = generateRandomDiscussion(15)

    side === "agree" ?
        res.status(200).json({
            status: 200,
            message: "discussion loaded",
            discussion: { side: "agree", messages }
        }) :
        res.status(200).json({
            status: 200,
            message: "discussion loaded",
            discussion: { side: "against", messages }
        })
}
