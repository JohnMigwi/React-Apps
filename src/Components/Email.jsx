import {useState} from "react";

function Email (){
 const [text, setText] = useState(" ");
 const [valid, setValid] = useState(false);

 function emailHandle(event){
    setText(event.target.value);
 }

function sendingForm(event){
    event.preventDefault();
    const check = text.includes("@");
    setValid(!check)
}

    return (
        <>
        <section>
        <input type="email" placeholder="Your Email" onChange={emailHandle}/>
        <button onClick={sendingForm}>submit</button>
        <p>{valid}</p>
        </section>
        
        </>
    );

};


export default Email;