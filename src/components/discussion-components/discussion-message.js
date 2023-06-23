import { useRouter } from 'next/router';
import { Text, Card, Row, Button } from "@nextui-org/react";
import { useRef, useEffect, useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BsReply, BsReplyFill } from 'react-icons/bs'

const DiscussionMessage = ({ user, body, id, side, time, focused }) => {
    const messageRef = useRef(null)
    const [isLiked, setIsLiked] = useState(false)
    const [reply, setReply] = useState(false)

    useEffect(() => {
        if (focused) messageRef.current.focus()
    })

    const router = useRouter()
    const styles = side === "agree" ?
        { headerBg: "#4E041E", bodyBg: "#910838", userTxt: "#B80A47", timeTxt: "#910838", bodyTxt: "#FDD8E5", justify: "flex-start", bodyTxtAlign: "left", cardMargin: ".2% 5% .2% 0" } :
        { headerBg: "#FDD8E5", bodyBg: "#FEF0F5", userTxt: "#F31260", timeTxt: "#F881AB", bodyTxt: "#4E041E", justify: "flex-end", bodyTxtAlign: "right", cardMargin: ".2% 0 .2% 5%" }

    return (
        <Card
            ref={messageRef}
            variant="bordered"
            borderWeight='normal'
            css={{ margin: styles.cardMargin, border: focused && "solid 5px red" }}
            isHoverable
            isPressable
            onPress={() => router.push(`/discussion/${side}/${id}`)}>
            <Card.Header css={{ backgroundColor: styles.headerBg, justifyContent: styles.justify }}>
                <Text css={{ color: styles.userTxt }}>{user}</Text>
                <Text css={{ color: styles.timeTxt, marginLeft: "2%" }}>{time}</Text>
            </Card.Header>
            <Card.Body css={{ backgroundColor: styles.bodyBg, paddingBottom: 0, paddingTop: "1%" }}>
                <Text css={{ color: styles.bodyTxt, textAlign: styles.bodyTxtAlign }}>{body}</Text>
            </Card.Body>
            <Card.Footer css={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: styles.bodyBg, padding: 0 }}>
                <Row justify="space-evenly">
                    <Button onPress={() => setIsLiked(!isLiked)} css={{ background: "inherit", color: styles.bodyTxt }} icon={isLiked ? <AiFillLike /> : <AiOutlineLike />} />
                    <Button onPress={() => setReply(!reply)} css={{ background: "inherit", color: styles.bodyTxt }} icon={reply ? < BsReplyFill /> : <BsReply />} />
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default DiscussionMessage
