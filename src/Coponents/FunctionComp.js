import {useState} from 'react'

export default function FunctionComp({old,color}) {
 const[counter,setCounter]=useState(0);
 const incCounter=()=>{
     setCounter(counter +1)
 }
 const desCounter=()=>{
     setCounter(counter-1)
 }
    return (
        <div>
           <h1>selam</h1> 
           <p>age:{old}</p>
           <p>color:{color.toUpperCase()}</p>
           <p>counter:{counter}</p>
           <button onClick={incCounter}>increase</button>
 <button onClick={desCounter}>descrememt</button>
        </div>
    );
} 

