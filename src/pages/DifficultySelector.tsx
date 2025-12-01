import './DifficultySelector.css'
import backgroundStage from '../assets/background_stage.png'
import PersonajeCerebro from '../components/PersonajeCerebro'
import { useNavigate } from 'react-router'
import '../App.css'
import { useState } from 'react'


const difficultiesTranslated = {
  easy: 'Fácil',
  normal: 'Normal',
  hard: 'Difícil',
  extreme: 'Extremo',
}

function DifficultySelector() {
    const navigate = useNavigate()
    const [difficultySelected, setDifficultySelected] = useState<string>('easy')
    const difficulties = ['easy', 'normal', 'hard', 'extreme']

    return (
      <div className="inicio-page">
        <img className="background-scenario" src={backgroundStage} alt="background-scenario" />
        <div className="content">
            <div className="difficulty-selection-container">
              <span className="difficulty-title">DIFICULTAD</span>
              <div>
                {difficulties.map((difficulty) => (
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
        </div>
      </div>
    )
}

export default DifficultySelector;
