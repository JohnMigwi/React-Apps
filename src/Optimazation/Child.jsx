import React from 'react'
import NestedChild from './NestedChild';

function Child() {
    console.log("<Child /> is called");
  return (
    <div id='Child'>
    <p>A component nested containing another component</p>
    <NestedChild/>
    </div>
  )
}

export default Child;