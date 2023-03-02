import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/components/debate-components/debate-body'
import Link from 'next/link'

// INCLUDE getServerSideProps if you need SSR
// export async function getServerSideProps() {
//     return {
//         props: {
//             vote: "agree"
//         }
//     }
// }

const Debate = () => {
    const router = useRouter()
    const { vote } = router.query
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/api/get-debate')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data.debate)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={styles.main}>
            <h2>Your Vote: {vote}</h2>
            {data && <h3>Debate: {data.title}</h3>}
            <div className={styles.debate_container}>
                {data && <DebateBody title={data.title} messages={data.messages} />}
            </div>
            <Link className={styles.go_to_link} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro": "against"} discussion</Link>
        </div>
    )
}

export default Debate
