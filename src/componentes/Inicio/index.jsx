import { Link } from "react-router-dom";
import '../style.css'
import './style.css'
// import calendar from '../../assets/calendar.jpg'
import { FcCalendar , FcCalculator , FcDocument } from "react-icons/fc";

export default function Inicio({user='sally'}) {
    return <>
    <legend>Organizador</legend>
    {/* <ul className="inicio-menu">
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
    </ul> */}

        <ul className="inicio-menu">
            <li className="inicio-notas">
                <Link className="link-inicio-notas" to= '/notas/buscar' title="Notas"><FcDocument className="icon-inicio"/></Link>
            </li>
            <li className="inicio-calendar">
                <Link className="link-inicio-calendario" to= '/calendario' >
                    <FcCalendar className="icon-inicio"/>
                </Link>
            </li>
            <li className="inicio-calculadora">
                <Link className="link-inicio-calculadora" to= '/calculadora' ><FcCalculator className="icon-inicio"/></Link>
            </li>
        </ul>
    
    </>
    
} 

