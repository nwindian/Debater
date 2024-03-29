import moment from 'moment/moment'

// function that generates an array of messages, of length arrayLength 
export const generateRandomDiscussion = (arrayLength) => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    const messageBody = () => loremIpsum.slice(0, Math.floor(Math.random() * loremIpsum.length))
    const messages = Array.from({ length: arrayLength }, (e, i) => {
        return {
            id: i,
            user: "user" + i,
            body: messageBody(),
            side: i % 2 === 0 ? "agree" : "disagree",
            timeAgoPosted: [4, 1.5]
        }
    })

    return messages;
}

// function that gets and formats time of message posted
export const getTime = (days, hours) => moment().subtract(days, 'days').subtract(hours, 'hours').calendar()


