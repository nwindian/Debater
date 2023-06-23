import { Dropdown, Link } from '@nextui-org/react'
import { AiOutlineMenu } from 'react-icons/ai'

const DropdownMenu = ({ yourVote }) => {
    return (
        <Dropdown>
            <Dropdown.Button flat icon={<AiOutlineMenu />} />
            <Dropdown.Menu aria-label="Single selection actions">

                {yourVote && (
                    <Dropdown.Section key="vote-options" css={{margin: "5% 0"}}>
                        <Dropdown.Item key="yourVote" description={`Your vote: ${yourVote}`}>
                            <Link href={`/discussion/${yourVote}`} >Discussion</Link>
                        </Dropdown.Item>
                    </Dropdown.Section>
                )}

                <Dropdown.Section key="other-links">
                    <Dropdown.Item key="debate">
                        <Link href={`/debate/${yourVote}`}>Debate</Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="login">
                        <Link href="/login">Login</Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="profile">
                        <Link href="/profile/becky">My Profile</Link>
                    </Dropdown.Item>
                </Dropdown.Section>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownMenu
