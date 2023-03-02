// GET comment

export default function handler(req, res) {
    const {commentId} = req.query
    res.status(200).json({
        status: 200,
        message: "discussion loaded",
        comment: {
            id: commentId,
            body: "here is a comment",
            userId: "user-1"
        }
    })
}
