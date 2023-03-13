export default function handler(req, res) {
      const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      const messageBody = () => loremIpsum.slice(0, Math.floor(Math.random() * loremIpsum.length))
      const messages = Array.from({length: 10}, (e, i) => {
            return {
                  id: i,
                  user: "user" + i,
                  body: messageBody(),
                  sideIsPro: i % 2 === 0 ? true : false,
                  timeAgoPosted: [4, 1.5]
            }
      })

      res.status(200).json({
            status: 200,
            message: "debate retrieved",
            debate: { title: "A Debate Title", messages}
      })
}
