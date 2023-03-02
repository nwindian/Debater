import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

const DiscussionSide = () => {
  const router = useRouter()
  const { side } = router.query

  return <p className={styles.main}>Discussion Side: {side}</p>
}

export default DiscussionSide