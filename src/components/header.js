import { Dropdown, Link } from '@nextui-org/react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({yourVote}) => {
    return (
        <Dropdown>
            <Dropdown.Button flat icon={<AiOutlineMenu />} />
            <Dropdown.Menu aria-label="Static Actions">
                { yourVote && <Dropdown.Item key="yourVote">
                    Your Vote: {yourVote}
                </Dropdown.Item>}
                <Dropdown.Item key="debate">
                    <Link href="/debate/agree">Debate</Link>
                </Dropdown.Item>
                <Dropdown.Item key="login">
                    <Link href="/login">Login</Link>
                </Dropdown.Item>
                <Dropdown.Item key="profile">
                    <Link href="/profile/becky">My Profile</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Header
