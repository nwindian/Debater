import styles from '@/styles/Home.module.scss'
import Link from 'next/link'


const Header = () => {
    return (
        <div className={styles.header}>
            <strong>This is a header</strong>
            <Link className={styles.link} href="/debate">Debate</Link>
            <Link className={styles.link} href="/login">Login</Link>
            <Link className={styles.link} href="/profile/becky">My Profile</Link>
        </div>
    )
}

export default Header