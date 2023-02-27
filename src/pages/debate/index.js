import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

export async function getServerSideProps() {
    // Pass data to the page via props
    return { props: { 
        vote: "agree"
     } }
  }

const Debate = ({vote}) => {
  console.log(vote)  
//   const router = useRouter()
//   const { vote } = router.query

  return <p className={styles.main}>Vote: {vote}</p>
}

export default Debate