import notas from '../ejemplos/db.js'
import {
    Link
  } from "react-router-dom";

export default function MenuNotas() {
    console.log(notas);
    return <>
    <legend>Menu Notas</legend>
    <div>
        {
        notas.map( ({id,titulo}) => {
            const to = `/notas/editar/${id}`
            return <div className='' key={id}>
                <Link to= {to} ><h3>{titulo}</h3></Link>
            </div>
        })
        }
    </div>
    </>
}