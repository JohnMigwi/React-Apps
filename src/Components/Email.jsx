import {useState, useRef} from "react";

function Email (){
    const [counter, setCounter] = useState(0);
    const counter2 = useRef(1);


    function handleCount(){
        setCounter(counter => counter + 1);
        counter2.current +=1;
        
    };

    function handleDecrease(){
        setCounter(prevCounter => prevCounter - 1);
        counter2.current -=1;
    };
 
    return (
        <>
         <div>
            <button onClick={handleCount}>Increase</button>
             <ul>
                <li>Counter :{counter}</li>
                <li>Counter :{counter2.current}</li>
             </ul>
             <button onClick={handleDecrease}>Decrease</button>
         </div>
        
        </>
    );

};
export default Email;