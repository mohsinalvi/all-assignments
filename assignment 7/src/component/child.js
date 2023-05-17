import {react, useContext, useRef} from 'react';
import {result} from './parent';

function Child(props){
    const res = useContext(result);
    const R1 = useRef(null);
    const R2= useRef(null);

    function operator(){
        if(props.sign === '+'){
            const number1 = Number(R1.current.value);
            const number2 = Number(R2.current.value);
            res.setRt1(number1 + number2);
        
        }
        else if(props.sign === '-'){
            const number1 = Number(R1.current.value);
            const number2 = Number(R2.current.value);
            res.setRt2(number1 - number2);
    }
    else if(props.sign === '/'){
        const number1 = Number(R1.current.value);
        const number2 = Number(R2.current.value);
        res.setRt3(number1 / number2);
}
    }
    return(
        <>
        <div>
            <div>
        <input type="text" ref={R1} /></div>
        {props.sign}<br></br>
        <div>
        <input type="text" ref={R2} /></div>
        <div><button onClick={operator}>Calculate</button></div><br></br>
        </div>
        </>
    )
}
export default Child;