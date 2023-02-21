import { useContext } from "react"; 
import { QuizContext } from "../../context/quiz";
import "./styles.css"; 
import Welldone from "../../img/welldone.svg"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { score, questions } = quizState;
  const totalQuestions = questions.length;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {percentage}%</p>
      <p>Você acertou {score} de {totalQuestions} perguntas.</p>
      <img src={Welldone} alt="Fim do Quiz" />
      <button onClick={()=> dispatch({ type: "NEW_GAME" }) }>Reiniciar</button>
    </div>
  )
}

export default GameOver
