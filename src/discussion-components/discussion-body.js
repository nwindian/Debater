import DiscussionMessage from "./discussion-message";
import styles from '@/styles/Home.module.scss'

const DiscussionBody = ({ messages }) => {
    console.log(messages)
    return (
        <div className={styles.disc_body_container}>
            {messages.map((m) => <DiscussionMessage key={m.id} id={m.id} user={m.user} body={m.body} />)}
        </div>
    )
}

export default DiscussionBody;
