import { Col, Container, Row, Text, Card } from "@nextui-org/react";
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
            <Col>
                <Card variant="bordered">
                    {data && <Text>{data.title}</Text>}
                </Card>
                <Card variant="bordered">
                    <Text>Your Vote: {vote}</Text>
                </Card>
            </Col>
            {data && <DebateBody title={data.title} messages={data.messages} />}
            <Link style={{ border: '2px solid red' }} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro" : "against"} discussion</Link>
        </Container>
    )
}

export default Debate
