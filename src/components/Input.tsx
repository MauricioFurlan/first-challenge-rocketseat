import { useEffect, useState } from 'react';
import '../styles/input.scss';

export function Input() {
    let [input, setInput] = useState('');
    
    useEffect(() => {
        setTimeout(() => {
          setInput('Lets go!!?')  
        }, 1500);
    }, [])

    function invert() {
        const value = input.split(' ')
        let invertName = ''
        if (value.length === 1) {
            setInput(input);
            return
        }
        for(var i=value.length-1; i>=0; i--){
            invertName+= value[i] + ' '
        }
        return setInput(invertName);
    }
    return (
        <>
        <div>
            <label className='msg'>Let's invert your phrase</label>
            <input onInput={e => {setInput(e.target.value)}} type="text" id="fname" name="firstname" placeholder="Write a phrase.."/>
            <button onClick={invert}>Invert phrase</button>
            <label className='result'>{input}</label> 
        </div>

        </>
    )
}