import React, { useEffect, useState } from 'react'

function Post() {

const [enteredText, setEnteredText] = useState('');
const [list, setList] = useState([]);
const [posts, setPosts] = useState([]);

function handleChange(event){
    setEnteredText(event.target.value);
};

function handleAdding(){
    setList([...list, enteredText]);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: enteredText }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });

    setEnteredText('');
}

async function handleFetch() {
    const blogs= await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await blogs.json();
    setPosts(response);
}

useEffect( ()=>{
  handleFetch();
}, [])

  return (
    <div>
        <input type='text' value={enteredText} onChange={handleChange}/>
        <button onClick={handleAdding}>Post</button>
        <ol>{list.map( (list,id) =>(
            <li key={id}>{list}</li>
        ))}</ol>
        <div>
            <h2>Data From server</h2>
            <ul>{posts.map((post, index) =>(
                <li key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}</ul>
        </div>
    </div>
  )
}

export default Post;