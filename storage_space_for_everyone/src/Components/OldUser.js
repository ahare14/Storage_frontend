import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class OldUser extends Component {

  constructor(){
    super()
    this.state = {
      user: {
        username: '',
        password: '',
      },
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/bookedspace' />
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
    this.setRedirect()

  }

  render() {
    return (
      <div className='return-user'>
        <h4>Returning User</h4>
        {this.renderRedirect()}
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
