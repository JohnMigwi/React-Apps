import { useState } from 'react';

function App () {

const [text, setText ] = useState('INITIAL TEXT');

function changeText () {
  setText('Changed Text');
}

return (
  <>
    <button onClick={changeText} > Clickv </button>
    <p>{text}</p>
  </>

);
}

export default App


