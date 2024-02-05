import { useState } from "react";


function CalcLogic(){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState('');
    var result = 0;
    
    function handleFirstNumber(event){
        setFirstNumber(event.target.value);
    }
    function handleSecondNumber(event){
        setFirstNumber(event.target.value);
    }
    
    const handleCalculate = () => {
        switch (operation) {
          case 'add':
            result=(parseInt(firstNumber) + parseInt(secondNumber));
            break;
          case 'sub':
            result = (parseInt(firstNumber) - parseInt(secondNumber));
            break;
          case 'div':
            result = (parseInt(firstNumber) / parseInt(secondNumber));
            break;
          case 'mul':
            result = (parseInt(firstNumber) * parseInt(secondNumber));
            break;
          default:
            result = (0);
            break;
        }
      };
   
    return(
        <>
        <input type="number" onChange={handleFirstNumber} value={firstNumber}/>
         <select value={operation}>
            <option value="add">+</option>
            <option value="mul">*</option>
            <option value="div">/</option>
            <option value="sub">-</option>
         </select> 
         <input type="number" onChange={handleSecondNumber} value={secondNumber} /> 

         
        </>
    );

};

export default CalcLogic;