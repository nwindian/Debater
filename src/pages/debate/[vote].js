import { Container, Row, Text } from "@nextui-org/react";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/components/debate-components/debate-body'
import Link from 'next/link'

const Debate = () => {
    const router = useRouter()
    const { vote } = router.query
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/api/get-debate')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data.debate)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Container fluid>
            <Row justify="center" align="center">
                {data && <Text>{data.title}</Text>}
            </Row>
            <p>Your Vote: {vote}</p>
            {data && <DebateBody title={data.title} messages={data.messages} />}
            <Link style={{border: '2px solid red'}} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro" : "against"} discussion</Link>
        </Container>
    )
}

export default Debate
