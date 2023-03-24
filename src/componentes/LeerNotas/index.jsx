import {useState, useEffect} from "react"
import {
    Link,
    useParams
} from "react-router-dom";

import notas from '../../ejemplos/db.js'
import ButtonLink from "../button/button.jsx";

export default function LeerNotas() {
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")

    let { id } = useParams();
    let data

    const nota = notas.find(({id:idNotas},index) => {
        if(idNotas===id){
            data = index
            return true
        }
        return false
    })

    useEffect(() => {    
        setTitulo(nota.titulo)
        setContenido(nota.contenido)
        
    },[setTitulo,setContenido]);
    

    return <>
        <legend>{titulo.length<30?titulo:titulo.slice(0, 30)+"..."}</legend>
        <div className="leerNota">
            <h2>{titulo}</h2>
            <br/>
            <p>{contenido}</p>
            <ButtonLink to="/notas/buscar" text="Regresar"/>
            <ButtonLink to={`/notas/editar/${id}`} text= 'Editar'/>
        </div>
    </>
}
