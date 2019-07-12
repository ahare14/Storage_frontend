import React, { Component } from 'react'

class OldUser extends Component {

  constructor(){
    super()
    this.state = {
      user: {
        username: '',
        password: '',
      }
    }
  }

  oldUser = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(state => {
      state.user[key] = value
      return state
    })
  }

  login = event => {
    event.preventDefault()
    const oldUser = {
      username: this.state.user.username,
      password: this.state.user.password,
    }
    this.props.oldUser(oldUser)
    this.setState(state => {
      state.user.username = ''
      state.user.password = ''
      return state
    })
  }

  render() {
    return (
      <div>
        <h4>Returning User</h4>
        <form onSubmit={this.login}>
          <input onChange={this.oldUser} type='text' name='username' value={this.state.user.username} placeholder='Enter a Username'></input>
          <input onChange={this.oldUser} type='password' name='password' value={this.state.user.password} placeholder='Enter a Password'></input>
          <input type='submit' value='Login'></input>
        </form>
      </div>
    );
  }

}

export default OldUser;
