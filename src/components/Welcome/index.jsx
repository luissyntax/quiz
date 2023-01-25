import { useContext } from "react"

import { QuizContext } from "../../context/quiz"

import quiz from "../../img/quiz.svg"
import './styles.css'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="Welcome">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={()=> dispatch({ type: "CHAGE_STATE" })}>Iniciar</button>
        <img src={quiz} alt="inicio do quiz" />
    </div>
  )
}

export default Welcome