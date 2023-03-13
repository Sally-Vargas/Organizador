import { Link } from "react-router-dom";
import './style.css'
export default function ButtonLink({to='/',text='button'}) {
    return <Link to= {to} ><button class="button-54" role="button">{text}</button></Link>
}