import { useState } from "react";
import React from "react";


function Email(){
  const [errorMessage, setErrorMessage] = useState('');
    function evaluateEmail(event){
        console.log("Hello you are working")
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')){
            setErrorMessage ("Entered email is invalid");
        } else {
        setErrorMessage ('');
      }
    }

    
return (
    <>
     <div>
        <input type="email" placeholder="Enter your email" onBlur={evaluateEmail}/>
        <p>{errorMessage}</p>
     </div>
     
    </>
  );
};


export default Email;