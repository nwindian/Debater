// import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Modal, Button, Text, Radio, Checkbox, useTheme } from '@nextui-org/react';

const Home = (props) => {
  const router = useRouter()
  // const { theme } = useTheme()
  const [vote, setVote] = useState("")
  const [visible, setVisible] = useState(true)

  const handleSubmit = e => {
    fetch("/api/post-vote", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ vote, user: "becky" })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          setVisible(false)
          router.push(`/debate/${data.data.vote}`)
        }
      })
      .catch(error => console.log(error))
  }


  return (
      <form method="post" onSubmit={handleSubmit}>
        <Modal
          preventClose
          blur
          open={visible}
          aria-labelledby="modal-title"
        >
          <Modal.Header>
            <Text h1="true" id="modal-title" size={20}>
              Welcome to Debater
              <Text size={17}>
                This is the debate synopsis
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="Agree" value={vote} onChange={setVote} aria-label="vote options">
              <Radio size="md" value="agree" color='success' labelColor='success' description='you agree with this'>Agree</Radio>
              <Radio size="md" value="disagree" color='warning' labelColor='warning' description='you disagree with this'>Disagree</Radio>
              <Radio size="md" value="abstain" color='error' labelColor='error' description='abstain and view discussion'>Abtain</Radio>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              auto
              ghost
              color="error"
              disabled={!vote}
              type="submit"
              onPress={handleSubmit}
            >Submit</Button>
          </Modal.Footer>
        </Modal>
      </form>
  )
}
export default Home
