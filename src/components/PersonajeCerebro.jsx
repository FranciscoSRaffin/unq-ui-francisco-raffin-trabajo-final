import difficultyBrainEasy from '../assets/difficulty_brain_easy.png'
import difficultyBrainExtreme from '../assets/difficulty_brain_extreme.png'
import difficultyBrainNormal from '../assets/difficulty_brain_normal.png'
import difficultyBrainHard from '../assets/difficulty_brain_hard.png'


function PersonajeCerebro({ difficulty = 'easy' }) {
    return (
        <div className="personaje">
            {difficulty === 'easy' && <img src={difficultyBrainEasy} />}
            {difficulty === 'normal' && <img src={difficultyBrainNormal} />}
            {difficulty === 'extreme' && <img src={difficultyBrainExtreme} />}
            {difficulty === 'hard' && <img src={difficultyBrainHard} />}
        </div>
    )
}

export default PersonajeCerebro;