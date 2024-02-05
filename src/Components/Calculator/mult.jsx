import { useState } from "react";

function Mult (){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    


    function handlefirstNumber(event){
        setFirstNumber(event.target.value);
    };

    function handleSecondNumber(event){
        setSecondNumber(event.target.value);
    };
    const result = Number(firstNumber) * Number (secondNumber);
    

    return(
        <>
        <input type="text" value={firstNumber} onChange={handlefirstNumber} /> * {' '}
        <input type="text" value={secondNumber} onChange={handleSecondNumber}/> = {result}
        
        </>
    );

};


export default Mult;