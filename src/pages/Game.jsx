import { useSearchParams } from 'react-router'

function Game() {
    const [searchParams] = useSearchParams()
    const difficulty = searchParams.get('difficulty')
    return (
        <div className="game-page">
            <h1>Game {difficulty}</h1>
        </div>
    )
}

export default Game