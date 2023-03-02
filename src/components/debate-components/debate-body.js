import styles from '@/styles/Home.module.scss'
import moment from 'moment/moment'
import DebateMessage from './debate-message'

const DebateBody = ({ title, messages }) => {
    return messages.length && messages.map((m) => {
        const time = moment().subtract(m.timeAgoPosted[0], 'days').subtract(m.timeAgoPosted[1], 'hours').calendar()
        return <DebateMessage key={m.id} id={m.id} user={m.user} body={m.body} time={time} side={m.sideIsPro ? "pro" : "against"} />
    })
}
export default DebateBody