import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

const DiscussionMessage = () => {
  const router = useRouter()
  const { mId } = router.query

  return <p className={styles.main}>Message id: {mId}</p>
}

export default DiscussionMessage