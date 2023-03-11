import { Col, Container, Text, Link } from "@nextui-org/react";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/components/debate-components/debate-body'

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
            <Col
                css={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                {data && <Text h2>{data.title}</Text>}
                <Text h6>Your Vote: {vote}</Text>
            </Col>
            {data && <DebateBody title={data.title} messages={data.messages} />}
            <Col
                css={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Link block css={{ alignText: "center", marginTop: "1%" }} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro" : "against"} discussion</Link>
            </Col>
        </Container>
    )
}

export default Debate
