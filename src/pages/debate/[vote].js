import { Navbar, Col, Container, Text, Link } from "@nextui-org/react";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DebateBody from '@/components/debate-components/debate-body'
import Header from "../../components/header";

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
        <>
            <Navbar shouldHideOnScroll css={{ margin: "1% 0" }}>
                    <Text h2>{data ? data.title : "Debater"}</Text>
                    {/* Maybe render this on a per-page basis instead of wrapping a <Layout> around _app? */}
                    <Header yourVote={vote}/>
                    {/*  */}
            </Navbar>
            <Container md>
                {data && <DebateBody title={data.title} messages={data.messages} />}
                <Col css={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <Link block css={{ alignText: "center", margin: "1% 0" }} href={`/discussion/${vote}`}>Go to {vote === "agree" ? "pro" : "against"} discussion</Link>
                </Col>
            </Container>
        </>
    )
}

export default Debate
