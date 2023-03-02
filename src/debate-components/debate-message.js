import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

const DebateMessage = ({id, user, body, time}) => {
    return (
        <Link href={`/discussion/msg/${id}`} className={styles.message}>
            <p>posted by: {user}</p>
            <p>message body: {body}</p>
            <p>time posted: {time}</p>
        </Link>
    )
}

export default DebateMessage;
