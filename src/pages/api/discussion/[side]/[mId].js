// GET specific message
const { generateRandomDiscussion } = require('../../../../helpers')

const handler = (req, res) => {
    const {side, mId} = req.query
    const messages = generateRandomDiscussion(15)
    const focusedMsg = messages.find(m => m.id === parseInt(mId))

    res.status(200).json({
        status: 200,
        message: "discussion loaded",
        messages,
        focusedMsg
    })
}

export default handler
