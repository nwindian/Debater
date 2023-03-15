import { Grid } from '@nextui-org/react'
import DiscussionMessage from "./discussion-message";
import { getTime } from '@/helpers'

const DiscussionBody = ({ messages, side, focusedMsgId }) => { 

    return (
        <Grid.Container gap={1}>
            {messages.length && messages.map((m) => {
                const time = getTime(m.timeAgoPosted[0], m.timeAgoPosted[1])
                return <DiscussionMessage focused={focusedMsgId === m.id} key={m.id} id={m.id} time={time} user={m.user} body={m.body} side={side} />
            })}
        </Grid.Container>
    )
}

export default DiscussionBody;
