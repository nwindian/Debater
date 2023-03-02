import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'
import { useState, useEffect } from 'react'
import DiscussionBody from '@/components/discussion-components/discussion-body'

const DiscussionSide = () => {
    const router = useRouter()
    const { side } = router.query
    const [discData, setDiscData] = useState(null)

    useEffect(() => {
        fetch(`/api/discussion/${side}`)
            .then(res => res.json())
            .then(data => {
                setDiscData(data.discussion.messages)
            })
            .catch(error => console.log(error))
    }, [])

    return (
    <div className={styles.main}>
        <h2>Discussion Side: {side}</h2>
        {discData && <DiscussionBody messages={discData} />}
    </div>
    )
}

export default DiscussionSide