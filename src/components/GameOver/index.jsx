import { useContext } from "react"; 
import { QuizContext } from "../../context/quiz";

import "./styles.css"; 
import Welldone from "../../img/welldone.svg"

const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  const point = quizState.score

  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: { (point * 100) / quizState.questions.length } </p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={Welldone} alt="Fim do Quiz" />
      <button onClick={()=> dispatch({ type: "NEW_GAME" }) }>Reniciar</button>
    </div>
  )
}

export default GameOver