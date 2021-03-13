import '../styles/item.scss';
import { v4 as uuidv4 } from 'uuid';
interface Value {
    text: string
}
export function Item(props: Value) {
    const uuidText = uuidv4();
    const uuidButton = uuidv4();

    function del () {
        const delTag = document.getElementById(uuidText);
        const delButton = document.getElementById(uuidButton)
        delTag.remove()
        delButton.remove()
    }
    return (
        <>
        <div className='container'>
            <label id={uuidText} className='text-item'>{props.text}</label>
            <span>
            <button id={uuidButton} className='text-button' onClick={del}> Done </button>
            </span>
        </div>
        </>
    )
}