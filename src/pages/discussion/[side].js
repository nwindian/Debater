import { useRouter } from 'next/router'
import { Navbar, Container, Text } from "@nextui-org/react";
import { useState, useEffect } from 'react'
import DiscussionBody from '@/components/discussion-components/discussion-body'
import DropdownMenu from "../../components/dropdown-menu";

const DiscussionSide = ({focusedMsgId}) => {
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
            
    }, [side])

    return (
        <>
            <Navbar shouldHideOnScroll css={{ margin: "1% 0" }}>
                <Text h2>Discussion Side: {side}</Text>
                <DropdownMenu yourVote={side} />
            </Navbar>
            <Container md>
                {discData && <DiscussionBody side={side} messages={discData} focusedMsgId={focusedMsgId} />}
            </Container>
        </>
    )
}

export default DiscussionSide
