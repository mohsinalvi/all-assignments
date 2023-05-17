import { createContext, useState } from "react";
import Child from './child';

export const result = createContext();


function Parent(){
    const [rt1, setRt1] = useState('');
    const [rt2, setRt2] = useState('');
    const [rt3, setRt3] = useState('');
    const value = {setRt1,setRt2,setRt3};

    return(
        <>
        <div className="box">
            <div>The Sum  is = {rt1}</div>
            <div>The Sub  is = {rt2}</div>
            <div>The Div  is = {rt3}</div>
        </div>
        <result.Provider value ={value}>
            <Child sign = '+' />
            <Child sign = '-' />
            <Child sign = '/' />
        </result.Provider>

        </>
    );
}

export default Parent;