import { Grid } from '@nextui-org/react'
import moment from 'moment/moment'
import DiscussionMessage from "./discussion-message";

const DiscussionBody = ({ messages, side, focusedMsgId }) => { 

    return (
        <Grid.Container gap={1}>
            {messages.length && messages.map((m) => {
                const time = moment().subtract(m.timeAgoPosted[0], 'days').subtract(m.timeAgoPosted[1], 'hours').calendar()
                return <DiscussionMessage focused={focusedMsgId === m.id} key={m.id} id={m.id} time={time} user={m.user} body={m.body} side={side === "agree" ? "pro" : "against"} />
            })}
        </Grid.Container>
    )
}

export default DiscussionBody;
