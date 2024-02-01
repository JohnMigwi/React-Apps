import React from "react";
function Email(){
  let errorMessage = " ";

    function evaluateEmail(event){
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')){
            errorMessage = "Entered email is invalid";
        } else {
        errorMessage = "Valid";
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