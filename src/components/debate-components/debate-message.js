import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

const DebateMessage = ({id, user, body, time, side}) => {
    return (
        <Link href={`/discussion/msg/${id}`} className={styles.message} style={{background: side === "pro" ? "orange" : "lightblue"}}>
            <p>posted by: {user}</p>
            <p>message body: {body}</p>
            <p>time posted: {time}</p>
            <p>side: {side}</p>
        </Link>
    )
}

export default DebateMessage;
