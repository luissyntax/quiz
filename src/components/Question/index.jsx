import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

import "./styles.css";

export const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div></div>
  )
}
