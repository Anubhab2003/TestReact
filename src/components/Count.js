import React,{useState} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const add=()=>{
        setCount(count+1);
    }
  return (
    <>
    
    <button type="button" class="btn btn-primary" onClick={add}>Click Me</button>
    <h1> Count is: {count}</h1>

    


    </>
  )
}
