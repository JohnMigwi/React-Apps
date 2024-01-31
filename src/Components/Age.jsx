import { useState } from "react";


function Age () {
    const [age] = useState('23');


    return (
        <>
        <p> My age is {age} and once again its a boy struggling to quit this bad addiction </p>
        </>
    );
};


export default Age

