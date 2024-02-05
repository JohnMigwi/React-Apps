import { useState } from "react";

function Div (){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState ('');


    function handlefirstNumber(event){
        setFirstNumber(event.target.value);
    };

    function handleSecondNumber(event){
        setSecondNumber(event.target.value);
    };

    function logic (){
        const sum= Number(firstNumber) / Number (secondNumber);
        setResult(sum);
    };

    return(
        <>
        <input type="text" value={firstNumber} onChange={handlefirstNumber} />
        <input type="text" value={secondNumber} onChange={handleSecondNumber}/>
        <button onClick={logic}>Div</button>
            <p>Result: {result}</p>
        </>
    );

};


export default Div;