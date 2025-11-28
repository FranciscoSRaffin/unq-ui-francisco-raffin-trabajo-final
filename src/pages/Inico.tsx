import './Inico.css'
import backgroundGrass from '../assets/background_grass.png'
import Personaje from '../components/Personaje'

function Inicio() {

    return (
      <div className="inicio-page">
        <img className="background-scenario" src={backgroundGrass} alt="background-scenario" />
        <div className="content">
            <div className="title-container">
            <svg className="title-svg" viewBox="0 0 800 200">
              <defs>
                <path id="curve" d="M 50,150 Q 400,50 750,150" fill="transparent" />
              </defs>
              <text className="title">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  PREGUNTADOS
                </textPath>
              </text>
            </svg>
            <span className="personaje-container">
              <Personaje/>
            </span>
            <span className="start-button-container">
              <button className="start-button">COMENZAR</button>
            </span>
          </div>
        </div>
      </div>
    )
}

export default Inicio;
