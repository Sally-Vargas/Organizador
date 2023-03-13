import './style.css'
export default function ButtonFunction({fun,text='button'}) {
    return <button class="button-54" role="button" onClick={fun}>{text}</button>
}