import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

const Profile = () => {
    const router = useRouter()
    const { profileId } = router.query

    return <p className={styles.main}>Profile: {profileId}</p>
}

export default Profile
