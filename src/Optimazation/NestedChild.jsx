import React from 'react'

function NestedChild() {
    console.log('<NestedChild/> is called')
  return (
    <div id='Nestedchild'>
        <p>A component deeply nested in the Component Tree</p>
    </div>
    
  )
}

export default NestedChild;