import notas from '../../ejemplos/db' //cambiar por base de datos
import {
    Link
} from "react-router-dom";
import '../style.css'

export default function MenuNotas() {
    
    return <>
    <legend>Menú Notas</legend>
    <ul>
        {
        notas.map( ({id,titulo,contenido}) => {
            const to = `/notas/leer/${id}`
            return <li className='notas' key={id}>
                <Link className='link-notas' to= {to} >
                    <h3>{titulo}</h3>
                    <p>{contenido.length<15?contenido:contenido.slice(0, 15)+"..."}</p>
                </Link>
            </li>
        })
        }
    </ul>
    </>
}