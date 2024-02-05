import { useState } from "react";

function Test () {
  const [ email, setEmail] = useState('');
  
  function emailHandler(event){
    setEmail(event.target.value);
  };
  function clearEmail(){
    setEmail ('');
  };

  return (
    <>
    <input type="email" placeholder="Enter Email" value={email} onChange={emailHandler}/>
    <button onClick={clearEmail}>reset</button>
    
    </>

  );
};


export default Test;