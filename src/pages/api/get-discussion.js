export default function handler(req, res) {
    res.status(200).json({
          status: 200,
          message: "discussion loated",
          discussion: {
                side: "pro",
                messages: [
                      
                ]
          }
    })
}
