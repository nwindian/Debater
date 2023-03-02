import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/debate-components/debate-body'
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
            .then(pData => {
                console.log(pData)
                if (pData.status === 200) {
                    setData(pData.debate)
                }
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={styles.main}>
            <p>Vote: {vote}</p>
            <div className={styles.debate_container}>
                {data && <DebateBody title={data.title} messages={data.messages} />}
            </div>
            <Link className={styles.go_to_link} href={`/discussion/${vote}`}>Go to discussion</Link>
        </div>
    )
}

export default Debate
