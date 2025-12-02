import './DifficultySelector.css'
import backgroundStage from '../assets/background_stage.png'
import PersonajeCerebro from '../components/PersonajeCerebro'
import { useNavigate } from 'react-router'
import '../App.css'
import { useEffect, useState } from 'react'
import { getDifficulties } from '../_services/api'

const difficultiesTranslated = {
  easy: 'Fácil',
  normal: 'Normal',
  hard: 'Difícil',
  extreme: 'Extremo',
}

function DifficultySelector() {
    const navigate = useNavigate()
    const [difficultySelected, setDifficultySelected] = useState<string>()
    const [difficulties, setDifficulties] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
      setIsLoading(true)
      getDifficulties()
      .then(setDifficulties)
      .catch((error: Error) => console.error(error.message))
      .finally(() => setIsLoading(false))
    }, [])

    return (
      <div className="inicio-page">
        <img className="background-scenario" src={backgroundStage} alt="background-scenario" />
        <div className="content">
            <div className="difficulty-selection-container">
              <span className="difficulty-title">DIFICULTAD</span>
              <div>
                {isLoading ? <h1>Cargando...</h1> : difficulties.map((difficulty) => (
                  <button className={difficulty === difficultySelected
                    ? 'difficulty-button difficulty-button-selected'
                    : 'difficulty-button'
                  }
                  onClick={() => setDifficultySelected(difficulty)}> {difficultiesTranslated[difficulty as keyof typeof difficultiesTranslated]} </button>
                ))}
              </div>
            </div>

            <span className="personaje-cerebro-container">
              <PersonajeCerebro difficulty={difficultySelected} />
            </span>
            <span className="send-button-container">
            <button className={difficultySelected
               ? 'send-button send-button-enabled'
               : 'send-button'
            }
            onClick={() => difficultySelected && navigate(`/game?difficulty=${difficultySelected}`, { replace: true })}
            >
                <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="40px"
                >
                <path 
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                />
                </svg>
            </button>
            </span>
        </div>
      </div>
    )
}

export default DifficultySelector;
