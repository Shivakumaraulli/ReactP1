import React, { Component } from 'react'

export class App extends Component {
  state={
    Name: '',
    Department: '',
    Rating: '', 
    Employees: []
  }
  clickButton=(e) => {
      this.setState({
        [e.target.name ]: e.target.value
      })
      console.log(this.state)
  }
  submitButton= (e) => {
      e.preventDefault();
      console.log('click event')
      const empObj ={
        Name: this.state.Name,
        Department: this.state.Department,
        Rating: this.state.Rating
      }
      const arr = this.state.employees
      arr.push(empObj);
      this.setState({employees: arr})
  }
  render() {
    return (
      <div>
        <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form className='Submit' >
          <label for='Name'>Name: </label><input type='text' value='' onClick={this.clickButton}></input><br/><br/>
          <label for='Department'>Department: </label><input type='text' value='' onClick={this.clickButton}></input><br/><br/>
          <label for='Rating'>Rating: </label><input type='text' value='' onClick={this.clickButton}></input><br/><br/>
          <button className='form' onClick={this.submitButton}>Submit</button>
        </form>
        <div className='flex'>
          {this.state.employees.map((value) => {
            return (
              <div className='box'>
                Name: {value.Name} | Department: {value.Department} | Rating: {value.Rating}
              </div>
            )
          })}
        </div>
        </div>
      </div>
    )
  }
}

export default App