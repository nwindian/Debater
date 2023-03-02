import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.scss'
import DiscussionMessage from '@/components/discussion-components/discussion-message'

const DebateMessage = () => {
  const router = useRouter()
  const { mId } = router.query
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch(`/api/discussion/comment/${mId}`)
      .then(r => r.json())
      .then(d => {
        console.log(d)
        setMessage(d.comment)
      })
  }, [])

  return (
    <div className={styles.generic_container}>
      <h3>Message id: {mId}</h3>
      {message && <DiscussionMessage user={message.userId} body={message.body} id={message.id} />}
    </div>
  )
}

export default DebateMessage