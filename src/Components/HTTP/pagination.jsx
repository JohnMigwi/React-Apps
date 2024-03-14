import React, { useState } from 'react'
import { useEffect } from 'react';

function Pagination() {

const [fetchData, setFetchData] = useState([]);
const [nextPageNumber, setNextPageNumber] = useState(1);
   
    useEffect(()=>{
        async function fetchNextData(pageNumber = 1 ){
            const data = await fetch(`https://randomuser.me/api?page=${pageNumber}`);
            const response = await data.json();
            setFetchData(response.results);
            setNextPageNumber(nextPageNumber +1)
        }
        fetchNextData(nextPageNumber);
    },[])

//?page=2

const handleNextPage = () => {
    setNextPageNumber(nextPageNumber + 1);
};
  return (
    <div>
        <ul>
        {fetchData.map(({name, cell,phone, picture, email}, index) =>(
          <div key={index}>
            <h2>{name.first} {name.last}</h2>
            <img src={picture.thumbnail} alt="User thumbnail" />
            <div>{cell}</div>
            <p>{email}</p>
            <button onClick={handleNextPage}>Next</button>
          </div>
        ))}
      </ul>    
        
        
    </div>
  )
}

export default Pagination;