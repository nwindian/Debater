import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

const Discussion = () => {
  const router = useRouter()
  const { mId } = router.query

  return <p className={styles.main}>Message id: {mId}</p>
}

export default Discussion