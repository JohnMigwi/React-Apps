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
        console.log(results);
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
        {loadedResults.map(({titile, name, cell,phone, picture}, index) =>(
          <div key={index}>
            <h2>{name.title} {name.first} {name.last}</h2>
            <img src={picture.thumbnail} alt="User thumbnail" />
            <div>{cell}</div>
          </div>
        ))}
      </ul>    
    </div>
   
   
  )
}

export default Trial  

