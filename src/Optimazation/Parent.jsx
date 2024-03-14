import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    console.log("<Parent/> is called");

    const [counter, setCounter] = useState(0);

    function increaseCounter(){
        setCounter((counter) => counter+1);
    }
  return (
    <div id='parent'>
        <p>Componrnt nested containg {Child}</p>
        <p>Counter: {counter}</p>
        <button onClick={increaseCounter}>increase Counter</button>
        <Child/>
    </div>
  )
}

export default Parent;