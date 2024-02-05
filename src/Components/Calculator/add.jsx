import { useState } from "react";

function Add (){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState(0);



    function handlefirstNumber(event){
        setFirstNumber(event.target.value);
    };

    function handleSecondNumber(event){
        setSecondNumber(event.target.value);
    };

    setResult( Number(firstNumber) + Number (secondNumber));
    
    return(
        <>
        <div>
        <input type="text" value={firstNumber} onChange={handlefirstNumber} /> + 
          <input type="text" value={secondNumber} onChange={handleSecondNumber}/> = {result}  
        </div>  
        </>
    );

};
export default Add;