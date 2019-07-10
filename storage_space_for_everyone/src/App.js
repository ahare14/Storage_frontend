import React, { Component } from 'react'
import Welcome from './Components/Welcome'
import SearchSpace from './Components/SearchSpace'
import ListSpace from './Components/ListSpace'
import AvailableSpace from './Components/AvailableSpace'
import DummyData from './DummyData'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: DummyData,
      query: []
    }
  }

  //need a Component did mount to populate my table

  addListing = (newListing) => {
    this.setState(state => {
      state.listings = [...this.state.listings, newListing]
      return state
    })
    // need to put a fetch below to add person to database
  }

  searchListings = (searchListing) => {
    this.setState(state => {
      state.query = searchListing
      return
    })
  }

  // filterSearchDisplay = () => {
  //   const queryValue = this.state.query
  //   const queryValueCity = (this.state.query.city).toLowerCase()
  //   const queryValuePlace = (this.state.query.place).toLowerCase()
    // const queryValueSqfeet = this.state.query.sqfeet
    // return this.state.listings.filter(listing => {
    //   if (!queryValue) {
    //     return true
      // } else if (listing.place.toLowerCase().includes(queryValuePlace)) {
      //   return listing.place.toLowerCase().includes(queryValuePlace)
      // } else if (listing.city.toLowerCase().includes(queryValueCity)) {
      //   return listing.city.toLowerCase().includes(queryValueCity)
      // } else if
    // } else {
    //     return (
    //       listing.place.toLowerCase().includes(queryValuePlace)
    //       || listing.city.toLowerCase().includes(queryValueCity)
          // || if(listing.sqfeet >= queryValueSqfeet)
  //       )
  //     }
  //   })
  // }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <h1>(Logo)</h1>
          <h2>Home</h2>
          <h2>Find Space</h2>
          <h2>List Space</h2>
        </nav>
        <main>
          <Welcome />
          <SearchSpace searchListings={this.searchListings}/>
          <AvailableSpace listings={this.state.listings} query={this.state.query}/>
          <ListSpace addListing={this.addListing} />
        </main>
      </div>
    );
  }
}

export default App;
