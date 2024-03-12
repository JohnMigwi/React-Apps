// 'https://jsonplaceholder.typicode.com/posts'
import React, {useState, useEffect} from 'react'

function Trial() {
    //handle fetch data 
    const [loadedResults, setLoadedResults] = useState([]);

   useEffect(() =>{ 
    const allResults = async () =>{
      try{
        const response = await fetch('https://randomuser.me/api/');
        const {results} = await response.json();
        setLoadedResults(results);
      }
      catch(error){
        console.log("Error Fetching data", error);
      }
    }
     allResults();
   },[])

  return (
    <div>
      <h1>All USERS FETCHED</h1>
      <ul>
        {loadedResults.map(({name, cell,phone}, index) =>(
          <li key={index}>
            <h2>{name.first}</h2>
          </li>
        ))}
      </ul>    
    </div>
   
   
  )
}

export default Trial  

