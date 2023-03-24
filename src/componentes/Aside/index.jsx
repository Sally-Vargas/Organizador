import ButtonLink from "../button/button";
import '../Aside/styles.css'
import { FaCalendarAlt , FaCalculator , FaRegStickyNote , FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Aside() {
    return <aside className="App-aside">
        <ul className="aside-menu">
            <li className="aside-inicio">
                <Link className="link-aside-inicio" to= '/' ><FaHome className="icon-aside"/></Link>
            </li>
            <li className="aside-notas">
                <Link className="link-aside-notas" to= '/notas/buscar' ><FaRegStickyNote className="icon-aside"/></Link>
            </li>
            <li className="aside-calendar">
                <Link className="link-aside-calendario" to= '/calendario' >
                    <FaCalendarAlt className="icon-aside"/>
                </Link>
            </li>
            <li className="aside-cal">
                <Link className="link-aside-calculadora" to= '/calculadora' ><FaCalculator className="icon-aside"/></Link>
            </li>
        </ul>
    </aside>
}