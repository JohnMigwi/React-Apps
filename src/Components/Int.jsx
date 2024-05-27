import React, {Fragment, useEffect, useState} from 'react'

function Int() {

  const [userData, setUserData] = useState([]);
   
 const hanldeNextData = async () =>{
   'https://randomuser.me/api' //?page=2 
 }

  const fetchUserData = async () =>{
    const userData = await fetch('https://randomuser.me/api');
    const response = await userData.json();
    const data =  response.results
    console.log(data);
    setUserData(data)
}

  useEffect(()=>{
    fetchUserData();
  }, [])

const getDetails = (name) => {
  return (
  <p>
   Title: {name.title} < br/> 
   FirstName: {name.first} < br/> 
   LastName: {name.last} 
   </p>
   );
}


  return (
    <Fragment >
        {userData.map((userData, id) => (        
          <ol key={id}>{getDetails(userData.name)}
          <img src={userData.picture.large} alt='picture'/>
          </ol>
      ))}
      
      <button onClick={hanldeNextData}>next</button>
    </Fragment>

    
  )
}

export default Int