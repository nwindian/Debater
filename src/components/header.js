import styles from '@/styles/Home.module.scss'
import { Dropdown, Link } from '@nextui-org/react'
import {AiOutlineMenu} from 'react-icons'
const Header = () => {
    console.log(AiOutlineMenu)
    return (
        <Dropdown>
            <Link className={styles.link} href="/debate/agree">Debate</Link>
            <Link className={styles.link} href="/login">Login</Link>
            <Link className={styles.link} href="/profile/becky">My Profile</Link>
        </Dropdown>
    )
}

export default Header
