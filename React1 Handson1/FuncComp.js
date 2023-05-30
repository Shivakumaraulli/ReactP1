import React from 'react'
import './components.css'

function FuncComp() {
  console.log('Hello')
  return (
    <div className='flexbox-1'>
      <h2>This is created Using Functional <br/> Component</h2>
      <p className='excess'>This is done Using External CSS</p>
      <p style= {{color: 'blue'}}>This is done Using Inline CSS</p>
    </div>
  )
}

export default FuncComp