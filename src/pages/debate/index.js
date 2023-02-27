import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'

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
        <>
            <p className={styles.main}>Vote: {vote}</p>
            <div className={styles.debate_container}>
                {data && (
                    <>
                        <div>{data.title}</div>
                        <ul>{data.messages.length && data.messages.map((m) => <li id={m.id}>{m.body}</li>)}</ul>
                    </>
                )}
            </div>
            {console.log(data)}
        </>
    )
}

export default Debate