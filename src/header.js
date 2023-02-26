import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const Header = () => {
    return (
        <div className={styles.header}>This is a header
            <Link href="/debate">Debate</Link>
            <Link href="/login">Login</Link>
            <Link href="/profile/becky">My Profile</Link>
        </div>
    )
}

export default Header