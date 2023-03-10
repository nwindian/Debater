import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const Home = (props) => {
  const router = useRouter()
  const [vote, setVote] = useState(null)

  const handleChange = e => {
    setVote(e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/api/post-vote", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ vote, user: "becky" })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) router.push(`/debate/${data.data.vote}`)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>This is the debate synopsis.</h1>
      <h3>Choose an option to vote and join the conversation, or abstain.</h3>

      <form className={styles.vote_form} method="post" onSubmit={handleSubmit}>
        <div className={styles.vote_option}>
          <label htmlFor="agree">Agree </label><input name="vote" id="agree" onChange={handleChange} type="radio" />
        </div>
        <div className={styles.vote_option}>
          <label htmlFor="disagree">Disagree </label><input name="vote" id="disagree" onChange={handleChange} type="radio" />
        </div>
        <div className={styles.vote_option}>
          <label htmlFor="abstain">Abstain </label> <input name="vote" id="abstain" onChange={handleChange} type="radio" />
        </div>
        <button className={styles.vote_button} disabled={!vote} type="submit">Submit</button>
      </form>

    </div>
  )
}
export default Home
