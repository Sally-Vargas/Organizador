import { Link } from "react-router-dom";
import '../style.css'
import './style.css'
import calendar from '../../assets/calendar.jpg'

export default function Inicio({user='sally'}) {
    return <>
    <legend>Organizador</legend>
    <ul className="inicio-menu">
        <li className="notas">
            <Link className="link-notas link" to= '/notas/buscar' ><h3>Notas de {user}</h3></Link>
        </li>
        <li className="calendar">
            <Link className="link" to= '/calendario' >
                <img src={calendar}/>
            </Link>
        </li>
        <li className="notas">
            <Link className="link-notas link" to= '/notas/buscar' ><h3>Notas de {user}</h3></Link>
        </li>
    </ul>
    
    </>
    
} 

