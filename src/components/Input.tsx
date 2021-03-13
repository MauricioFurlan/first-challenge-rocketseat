import { useEffect, useState } from 'react';
import {Item} from '../components/Item';
import '../styles/input.scss';

export function Input() {
    let [input, setInput] = useState('');
    let [text, setText] = useState<string[]>([]);
    
    useEffect(() => {
        setTimeout(() => {
          setInput('Lets go!!?')  
        }, 1500);
    }, [text])

    function invert() {
        setText([...text, input]);
        console.log(text)
        // const value = input.split(' ')
        // let invertName = ''

        // if (value.length === 1) {
        //     setInput(input);
        //     return
        // }
        // for(var i=value.length-1; i>=0; i--){
        //     invertName+= value[i] + ' '
        // }
        // return setInput(invertName);
    }
    return (
        <>
        <div>
            <label className='msg'>Coisas para fazer: </label>
            <input onInput={e => {setInput(e.target.value)}} type="text" placeholder="What do you need to do?"/>
            <button onClick={invert}>Add</button>
            <div className='result'>{input}</div> 
        </div>
        <hr></hr>
            {text.map(value => {
                return <Item key={value} text={value}/>
            })}

        </>
    )
}