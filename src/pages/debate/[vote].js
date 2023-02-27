import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

const Debate = () => {
  const router = useRouter()
  const { vote } = router.query

  return <p className={styles.main}>Vote: {vote}</p>
}

export default Debate