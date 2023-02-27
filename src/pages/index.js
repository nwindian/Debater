import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

// ADDITIONAL LOGIC FOR GETSERVERSIDE PROPS, MAY NOT NEED (along with util and body-parser packages)

// import bodyParser from 'body-parser';
// import util from "util"

// const getBody = util.promisify(bodyParser.urlencoded());

// export async function getServerSideProps({ req, res }) {
//   console.log(req.method, req.body)
//   if (req.method === "POST") {
//     await getBody(req, res);
//     return {
//       props: {
//         name: req.body?.id || "id",
//         message: req.body ? "received!" : "",
//       }
//     };
//   }
//   return {
//     props: {
//       message: "unsuccessful"
//     }
//   }
// }

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
    .then(res=>res.json())
    .then(data=>{
      if (data.status === 200) router.push(`/debate/${data.data.vote}`)
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className={styles.main}>
      <h1>This is the debate synopsis.</h1>
      <h3>Choose an option to vote and join the conversation, or abstain.</h3>
      <form method="post" onSubmit={handleSubmit}>
        <label for="agree">Agree </label><input name="vote" id="agree" onChange={handleChange} type="radio" />
        <label for="disagree">Disagree </label><input name="vote" id="disagree" onChange={handleChange} type="radio" />
        <label for="abstain">Abstain </label> <input name="vote" id="abstain" onChange={handleChange} type="radio" />
        <button disabled={!vote} type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Home