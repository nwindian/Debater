import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

const DiscussionMessage = ({ user, body, id }) => {
    return (
        <Link href={`/discussion/msg/${id}`} className={styles.comment_container}>
            <p>user: {user}</p>
            <p>{body}</p>
        </Link>
    )
}
export default DiscussionMessage
