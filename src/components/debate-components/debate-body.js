import { Grid } from '@nextui-org/react'
import DebateMessage from './debate-message'
import { getTime } from '@/helpers'

const DebateBody = ({ messages }) => {
    return (
        <Grid.Container gap={1}>
            {messages.length && messages.map((m) => {
                const time = getTime(m.timeAgoPosted[0], m.timeAgoPosted[1])
                return <DebateMessage key={m.id} id={m.id} user={m.user} body={m.body} time={time} side={m.side} />
            })}
        </Grid.Container>
    )
}

export default DebateBody
