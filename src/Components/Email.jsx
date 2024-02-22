  import { useState, useRef } from "react";
    
    function Email() {

        const nameref = useRef();
        const choiceref = useRef();


        const currentref = nameref.current.value;
        console.log("current name is"+ currentref);



        const currentChoice = choiceref.current.value;
        console.log("current choise:" + currentChoice);



  
   
      
        return(
        <section>
        <label>Your name</label>
         <input type="text" ref={nameref}/>
         <label for="select">Choose a pet:</label>
            <select name="pets" id="pet-select" ref={choiceref}>
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
        </section>
       );
    };


export default Email;