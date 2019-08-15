import React, { Component } from 'react';

class CurrentUserForm extends Component {

  state = {
    userName: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.cookies.set('name', this.state.userName, { path: '/' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChange} name="userName" value={this.state.userName}></input>
          <input type='submit' value="Set User Name"></input>
        </form>
      </div>
    )
  }
}

export default CurrentUserForm
