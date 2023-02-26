import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter()
  const [vote, setVote] = useState(null)

  const handleChange = e => {
    setVote(e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: send vote to backend, pass with getServerSideProps
    router.push('/debate')
  }

  return (
    <div className={styles.main}>
      <h1>This is the debate synopsis.</h1>
      <h3>Choose an option to vote and join the conversation, or abstain.</h3>
      <form onSubmit={handleSubmit}>
        <label for="agree">Agree </label><input name="vote" id="agree" onChange={handleChange} type="radio" />
        <label for="disagree">Disagree </label><input name="vote" id="disagree" onChange={handleChange} type="radio" />
        <label for="abstain">Abstain </label> <input name="vote" id="abstain" onChange={handleChange} type="radio" />
        <button disabled={!vote} type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Home