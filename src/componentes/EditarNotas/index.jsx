import {useState, useEffect} from "react"
import {
    Link,
    useParams
  } from "react-router-dom";
import './style.css'

import notas from '../../ejemplos/db.js'
import AllButton from "../button/button";
import ButtonFunction from "../button/buttonfunction";
import ButtonLink from "../button/button";

export default function EditarNotas() {
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
    
    function handleChangeContenido(e) { 
        e.preventDefault()
        setContenido(e.target.value)
    }

    function handleChangeText(e) { 
        e.preventDefault()
        setTitulo(e.target.value)
    }

    function guardarCambios(e) {
        e.preventDefault()
        notas[data].contenido = contenido
        notas[data].titulo = titulo
    }

    return <>
        <legend>Editando: {titulo.length<30?titulo:titulo.slice(0, 30)+"..."}</legend>
        <div className="editarNota">
            <input
                // className="tituloNota"
                value={titulo} 
                type="text" 
                onChange={handleChangeText}
                maxLength={64}
                >
            </input>
            <br/>
            <textarea 
            defaultValue={contenido} 
            maxLength={1024} 
            onChange={handleChangeContenido}
            ></textarea>
            <ButtonLink to="/notas/buscar" text="Regresar"/>
            <ButtonFunction fun={guardarCambios} text='Guardar'/>
        </div>
    </>
}