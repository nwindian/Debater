import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/components/debate-components/debate-body'
import Link from 'next/link'

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
            
            <div className={styles.title}>
                {data && <h1>Debate: {data.title}</h1>}
                <h3>Your Vote: {vote}</h3>
            </div>

            <div className={styles.debate_container}>
                {data && <DebateBody title={data.title} messages={data.messages} />}
            </div>
            <Link className={styles.go_to_link} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro" : "against"} discussion</Link>
        </div>
    )
}

export default Debate
