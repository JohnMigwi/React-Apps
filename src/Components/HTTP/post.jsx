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
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input type="text" value={enteredText} onChange={handleChange} className="border border-gray-300 p-2 rounded-md mr-2" />
        <button onClick={handleAdding} className="bg-blue-500 text-white p-2 rounded-md">Post</button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Entered Text List</h2>
        <ol className="list-decimal pl-4">
          {list.map((item, id) => (
            <li key={id} className="mb-1">{item}</li>
          ))}
        </ol>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Data From Server</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="border-b border-gray-300 py-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;