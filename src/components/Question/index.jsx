import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

import "./styles.css";

export const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1 } de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-conteiner">
        <p>{}</p>
      </div>
      <button onClick={()=> dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
    </div>
  )
}
