import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NewUser extends Component {

  constructor(){
    super()
    this.state = {
      user: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        hometown: ''
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
      return <Redirect to='/findspace' />
    }
  }

  newUser = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(state => {
      state.user[key] = value
      return state
    })
  }

  createUser = event => {
    event.preventDefault()
    const createUser = {
      username: this.state.user.username,
      password: this.state.user.password,
      first_name: this.state.user.first_name,
      last_name: this.state.user.last_name,
      hometown: this.state.user.hometown,
    }
    this.props.addUser(createUser)
    this.setState(state => {
      state.user.username = ''
      state.user.password = ''
      state.user.first_name = ''
      state.user.last_name = ''
      state.user.hometown = ''
      return state
    })
    // this.pageRefresh()
    this.setRedirect()
  }

  pageRefresh = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="new-user-form">
        <h4>New User</h4>
        {this.renderRedirect()}
        <form onSubmit={this.createUser}>
          <input onChange={this.newUser} type='text' name='username' value={this.state.user.username} placeholder='Enter a Username'></input>
          <input onChange={this.newUser} type='text' name='password' value={this.state.user.password} placeholder='Enter a Password'></input>
          <input onChange={this.newUser} type='text' name='first_name' value={this.state.user.first_name} placeholder='Enter Your First Name'></input>
          <input onChange={this.newUser} type='text' name='last_name' value={this.state.user.last_name} placeholder='Enter Your Last Name'></input>
          <input onChange={this.newUser} type='text' name='hometown' value={this.state.user.hometown} placeholder='Enter Your Hometown'></input>
          <input type='submit' value='Create New User'></input>
        </form>
      </div>
    );
  }

}

export default NewUser;
