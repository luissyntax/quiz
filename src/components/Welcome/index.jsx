import quiz from "../../img/quiz.svg"
import './styles.css'

const Welcome = () => {
  return (
    <div id="Welcome">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={quiz} alt="inicio do quiz" />
    </div>
  )
}

export default Welcome