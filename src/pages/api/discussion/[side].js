// GET discussion

export default function handler(req, res) {
    const { side } = req.query
    res.status(200).json({
        status: 200,
        message: "discussion loaded",
        discussion: {
            side: "pro",
            messages: [
                { id: 0, user: "user-1", body: "here's a reason why I agree" },
                { id: 1, user: "user-2", body: "here's a a response to your message" }
            ]
        }
    })
}
