import personajeCara from '../assets/personaje_layer_2.png'
import personajeCuerpo from '../assets/personaje_layer_1.png'
import personajeExtremidades from '../assets/personaje_layer_0.png'
import './Personaje.css'

function Personaje() {
    return (
        <div className="personaje">
            <img className="personaje-parte" src={personajeExtremidades} />
            <img className="personaje-parte pj-body" src={personajeCuerpo} />
            <img className="personaje-parte" src={personajeCara} />
        </div>
    )
}

export default Personaje;