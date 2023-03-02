import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'
import { useState } from 'react'

const DiscussionSide = () => {
    const router = useRouter()
    const { side } = router.query
    const [discData, setDiscData] = useState(null)

    useEffect(() => {
        fetch(`/api/get-discussion/${side}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDiscData(data.discussion.messages)
            })
            .catch(error => console.log(error))
    }, [])

    return (
    <div className={styles.main}>
        <p>Discussion Side: {side}</p>

    </div>
    )
}

export default DiscussionSide