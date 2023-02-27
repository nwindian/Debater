export default function handler(req, res) {
      res.status(200).json({
            status: 200,
            message: "debate retrieved",
            debate: {
                  title: "debate title",
                  messages: [
                        { id: 0, user: "user1", body: "message 1", sideIsPro: true, timeAgoPosted: [5, 2.8] },
                        { id: 1, user: "user2", body: "message 2", sideIsPro: false, timeAgoPosted: [4, 1.5] },
                        { id: 2, user: "user3", body: "message 3", sideIsPro: true, timeAgoPosted: [3, 3.22] },
                        { id: 3, user: "user4", body: "message 4", sideIsPro: false, timeAgoPosted: [3, 1] }
                  ]
            }
      })
}
