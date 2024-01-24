import { useState } from "react"



function MyName () {
    const [Name, setName] = useState('JOHN');
    
    return (
        <>
        <b>Hi This is Me - { Name } !</b>
        </>

    );
}

export default MyName;