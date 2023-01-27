import { useContext } from "react";

import { QuizContext } from "../../context/quiz";
import Options from "../Options";

import "./styles.css";

const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) =>{
    dispatch({
      type: "CHECK-ANSWER",
      payload: {answer: currentQuestion.answer, option}
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1 } de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-conteiner">
        {currentQuestion.options.map((option, k) => (
          <Options
            option={option} 
            key={k} 
            answer={currentQuestion.answer}
            selectOption = { () => onSelectOption(option)}
            />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={()=> dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
      )}
    </div>
  )
};

export default Question;