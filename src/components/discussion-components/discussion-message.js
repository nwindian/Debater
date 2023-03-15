import { useRouter } from 'next/router';
import { Text, Card } from "@nextui-org/react";
import { useRef, useEffect } from 'react';

const DiscussionMessage = ({ user, body, id, side, time, focused }) => {
    console.log(focused, "focused")
    const messageRef = useRef(null)

    useEffect(()=>{
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
            <Card.Body css={{ backgroundColor: styles.bodyBg }}>
                <Text css={{ color: styles.bodyTxt, textAlign: styles.bodyTxtAlign }}>{body}</Text>
            </Card.Body>
        </Card>
    )
}
export default DiscussionMessage
