import React, { Component } from 'react'
import './components.css'

export class ClassComp extends Component {
  render() {
    return (
      <div className='flexbox'>
        <h2>This is done using Class <br/> Component</h2>
        <p className='excess'>This is done using External CSS</p>
        <p style={{color: 'blue'}}>This is done using Inline CSS</p>
      </div>
    )
  }
}

export default ClassComp