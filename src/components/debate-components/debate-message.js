import { useRouter } from 'next/router';
import { Text, Card } from "@nextui-org/react";

const DebateMessage = ({ id, user, body, time, side }) => {
    const router = useRouter()

    const styles = side === "pro" ?
        { headerBg: "#4E041E", bodyBg: "#910838", userTxt: "#B80A47", timeTxt: "#910838", bodyTxt: "#FDD8E5", justify: "flex-start", bodyTxtAlign: "left", cardMargin: ".3% 5% .3% 0" } :
        { headerBg: "#FDD8E5", bodyBg: "#FEF0F5", userTxt: "#F31260", timeTxt: "#F881AB", bodyTxt: "#4E041E", justify: "flex-end", bodyTxtAlign: "right", cardMargin: ".3% 0 .3% 5%"}

    return (
        <Card
            variant="bordered"
            borderWeight='normal'
            css={{ margin: styles.cardMargin }}
            isHoverable
            isPressable
            onPress={() => router.push(`/discussion/msg/${id}`)}>
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

export default DebateMessage;
