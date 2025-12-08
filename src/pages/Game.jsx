import { useSearchParams } from 'react-router'
import { getQuestions, getResponse } from '../_services/api'
import { useState, useEffect, useRef } from 'react'
import backgroundGame from '../assets/background_quiz.png'
import './Game.css'
import { useNavigate } from 'react-router'

function Game() {
    const [searchParams] = useSearchParams()
    const difficulty = searchParams.get('difficulty')
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [success, setSuccess] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [puntaje, setPuntaje] = useState(0)
    const [correctas, setCorrectas] = useState(0)
    const difficulty_multiplier = {
        easy: 1,
        normal: 2,
        hard: 3,
        extreme: 4
    }

    useEffect(() => {
        setIsLoading(true)
        getQuestions(difficulty)
            .then(setQuestions)
            .finally(() => setIsLoading(false))
            .catch((error) => console.error(error.message))
    }, [])

    useEffect(() => {
        if (success !== null && questionNumber < questions.length) {
            setTimeout(() => {
                setSuccess(null)
                setSelectedOption(null)
                setQuestionNumber(questionNumber + 1)
            }, 1000)
        }
    }, [success, questionNumber, questions.length])

    const selectOption = (option) => {
        if (selectedOption !== null) return

        setSelectedOption(option)
        getResponse(option, questions[questionNumber].id)
            .then((response) => {
                setSuccess(response.answer)
                if (response.answer) {
                    setCorrectas(correctas + 1)
                    setPuntaje(puntaje + difficulty_multiplier[difficulty])
                } else {
                    setPuntaje(puntaje - 0.1 * difficulty_multiplier[difficulty])
                }
            })
            .catch((error) => console.error(error.message))
    }

    const getButtonClassName = (option) => {
        if (selectedOption === option && success !== null) {
            return success ? 'option-buttom success-color' : 'option-buttom fail-color'
        }

        return 'option-buttom'
    }

    return (
        <div className="inicio-page">
            <img className="background-scenario" src={backgroundGame} alt="background-scenario" />
            <div className="content">
                {isLoading ? <h1 className="question-title">Cargando...</h1> : questions.length > 0 && questionNumber < questions.length ? (
                    <div className="question-container">
                        <h1 className="question-title">{questions[questionNumber].question}</h1>
                        <div className="question-options-container">
                            <button className={getButtonClassName("option1")}
                                onClick={() => selectOption("option1")}> {questions[questionNumber].option1} </button>
                            <button className={getButtonClassName("option2")}
                                onClick={() => selectOption("option2")}> {questions[questionNumber].option2} </button>
                            <button className={getButtonClassName("option3")}
                                onClick={() => selectOption("option3")}> {questions[questionNumber].option3} </button>
                            <button className={getButtonClassName("option4")}
                                onClick={() => selectOption("option4")}> {questions[questionNumber].option4} </button>
                        </div>
                    </div>
                ) : questionNumber >= questions.length ? (
                    <div className="question-container">
                        <h1 className="question-title">¡Juego completado!</h1>
                        <h1 className="question-title">Tu puntaje final es: {Math.max(0, Math.round(puntaje, 2))}</h1>
                        <h1 className="question-title">Respuestas correctas: {correctas}/{questions.length}</h1>
                        <button className="restart-button" onClick={() => navigate('/difficulty-selector')}>
                            <span className="transition"></span>
                            <span className="gradient"></span>
                            <span className="label">Reiniciar</span>
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Game