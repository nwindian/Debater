import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import Link from 'next/link'

export async function getServerSideProps() {
    return {
        props: {
            vote: "agree"
        }
    }
}

const Debate = ({ vote }) => {
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
                {data && (
                    <>
                        <div>{data.title}</div>
                        {data.messages.length && data.messages.map((m) => {
                            const time = moment().subtract(m.timeAgoPosted[0], 'days').subtract(m.timeAgoPosted[1], 'hours').calendar()

                            return (
                                <Link href={`discussion/${m.id}`} className={styles.message} key={m.id}>
                                    <p>posted by: {m.user}</p>
                                    <p>message body: {m.body}</p>
                                    <p>time posted: {time}</p>
                                </Link>
                            )
                        })}
                    </>
                )}
            </div>
            {console.log(data)}
        </div>
    )
}

export default Debate
