import React, { Component } from 'react'

class SearchSpace extends Component {
  constructor(){
    super()
    this.state = {
      query: {
        city: '',
        place: '',
        sqfeet: 0,
      }
    }
  }

  searchSpaces = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(state => {
      state.query[key] = value
      return state
    })
  }

  addSearchItem = event => {
    event.preventDefault()
    const searchedSpace = {
      city: this.state.query.city,
      place: this.state.query.place,
      sqfeet: this.state.query.sqfeet
    }
    this.props.searchListings(searchedSpace)
    console.log(this.props.searchListings(searchedSpace))

    this.setState(state => {
      state.query.city = ''
      state.query.place = ''
      state.query.sqfeet = ''
      return state
    })
  }



  render() {
    return(
      <div className='searchSpace'>
        <h4>Find Space</h4>
        <form onSubmit={this.addSearchItem}>
          <input onChange={this.searchSpaces} type='text' name='city' placeholder='Enter a City'></input>
          <input onChange={this.searchSpaces} type='text' name='place' placeholder='Enter a State'></input>
          <input onChange={this.searchSpaces} type='number' name='sqfeet' placeholder='Enter a Sq ft Needed'></input>
          <input onChange={this.searchSpaces} type='submit'></input>
        </form>
      </div>
    )
  }
}

export default SearchSpace
