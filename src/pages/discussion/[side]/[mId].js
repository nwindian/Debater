import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DiscussionSide from '../[side]'

const DebateMessage = () => {
  const router = useRouter()
  const { mId, side } = router.query
  const [messages, setMessages] = useState(null)
  const [focusedMsg, setFocusedMsg] = useState(null)

  useEffect(() => {
    fetch(`/api/discussion/${side}/${mId}`)
      .then(r => r.json())
      .then(d => {
        setMessages(d.messages)
        setFocusedMsg(d.focusedMsg)
      })
  }, [mId])

  return (
    <>
      {messages && focusedMsg && (<DiscussionSide focusedMsgId={focusedMsg.id} />)}
    </>
  )
}

export default DebateMessage
