import React, { Component } from 'react'
import Welcome from './Components/Welcome'
import SearchSpace from './Components/SearchSpace'
import ListSpace from './Components/ListSpace'
import AvailableSpace from './Components/AvailableSpace'
import NewUser from './Components/NewUser'
import OldUser from './Components/OldUser'
import BookedPlaces from './Components/BookedPlaces'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'

const apiUrlUser = 'http://localhost:3000/users'
const apiUrlProperties = 'http://localhost:3000/properties'
const apiUrlFavs = 'http://localhost:3000/favorites'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      favListings:[],
      query: [],
      newUser: [],
      oldUser: [],
      allUsers: [],
      currentUser:[]
    }
  }

  //need a Component did mount to populate my table

  componentDidMount(){
    this.getListings()
    this.getUsers()
    this.favListings()
  }

  getUsers(){
    fetch(apiUrlUser)
    .then(response => response.json())
    .then(result => this.setState({
      allUsers: result
    }))
    .catch(error => console.log('error', error))
  }


  getListings() {
    fetch(apiUrlProperties)
      .then(response => response.json())
      .then(result => this.setState({
        listings: result
      }))
      .catch(error => console.log('error', error))
  }

  addListing = (newListing) => {
    this.setState(state => {
      state.listings = [...this.state.listings, newListing]
      return state
    })
    fetch(apiUrlProperties, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({property: newListing})
    }).catch(error => console.error(error.message))
    // need to put a fetch below to add listing to database
  }

  searchListings = (searchListing) => {
    console.log(searchListing)
    this.setState(state => {
      state.query = searchListing
      return state
    })
  }

  addUser = currentUser => {
    this.setState(state  => {
      state.newUser = currentUser
      return state
    })
    console.log(JSON.stringify(currentUser))
    fetch(apiUrlUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: currentUser})
    }).catch(error => console.error(error.message))
  }

  oldUser = oldUser => {
    // console.log(oldUser)
    this.setState(state => {
      state.user = oldUser
      return state
    })
    const current = this.state.allUsers.filter(findUser => {
      return findUser.username.includes(oldUser.username)
    })
    this.setState(state => {
      state.currentUser = current
    })
    // this.pageRefresh()
  }

  favListings(){
    fetch(apiUrlFavs)
      .then(response => response.json())
      .then(result => this.setState({
        favListings: result
      }))
      .catch(error => console.log('error', error))
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <nav className='navbar'>
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/allspaces/">All Spaces</Link></h2>
            <h2><Link to="/findspace/">Find Space</Link></h2>
            <h2><Link to="/listSpace/">List Space</Link></h2>
            <h2><Link to="/bookedspace/">Booked Places</Link></h2>
          </nav>
          <main className="main-page">
            <Welcome currentUser={this.state.currentUser} />
            {this.state.currentUser.length > 0
              ? <h1 className='hello'>Lets Store Some Space {this.state.currentUser[0].first_name}!</h1>
              : null

            }
            <Route path='/login'
              render={props =>
              <OldUser {...props}
                oldUser={this.oldUser} />
            }/>
            <Route path='/signup'
              render={props =>
              <NewUser {...props}
                addUser={this.addUser} />
            }/>
            <Route path="/bookedspace/"
              render={props =>
                <BookedPlaces {...props}
                  favListings={this.state.favListings}
                  currentUser={this.state.currentUser}
                />
              }/>
            <Route path="/findspace/"
              render={props =>
                <SearchSpace {...props}
                  searchListings={this.searchListings}/>
              }/>
            <Route path="/allspaces/"
              render={props =>
                <AvailableSpace {...props}
                  listings={this.state.listings}
                  query={this.state.query}
                  userId={this.state.currentUser}/>
              }/>
            <Route path="/listSpace/"
              render={props =>
                <ListSpace {...props}
                  addListing={this.addListing}/>
              }/>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

// <SearchSpace searchListings={this.searchListings}/>
