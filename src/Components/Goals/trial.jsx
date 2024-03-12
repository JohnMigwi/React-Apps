// 'https://jsonplaceholder.typicode.com/posts'
import React, {useState, useEffect} from 'react'


function Trial() {
    
    const [loadedResults, setLoadedResults] = useState([]);
    
      async function fetchData (){
        try{
          const response = await fetch('https://randomuser.me/api/?results=5000');
          const results = await response.json();
          console.log(results);
          setLoadedResults(results);
        }
        catch(error){
          console.log("Error Fetching data", error);
        }
      }
      
      useEffect(()=>{
        fetchData();
    }, []);
     


  return (
    <div>
      <h1>All USERS FETCHED</h1>
      <p>{loadedResults}</p>
      {/* <ul>
        {loadedResults.map(({titile, name, cell,phone, picture, email}, index) =>(
          <div key={index}>
            <h2>{name.title} {name.first} {name.last}</h2>
            <img src={picture.thumbnail} alt="User thumbnail" />
            <div>{cell}</div>
            <p>{email}</p>
            <button onClick={fetchData}>Fetch Data</button>
          </div>
        ))}
      </ul>     */}
    </div>
   
   
  )
}

export default Trial  

