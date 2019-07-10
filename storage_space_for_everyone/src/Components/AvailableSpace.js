import React, { Component } from 'react'
import Listing from './Listing'

class AvailableSpace extends Component {


  filterSearchDisplay = () => {
    const queryValue = this.props.query
    const queryValueCity = (this.state.query.city).toLowerCase()
    const queryValuePlace = (this.state.query.place).toLowerCase()
    // const queryValueSqfeet = this.state.query.sqfeet
    return this.state.listings.filter(listing => {
      if (!queryValue) {
        return true
    } else {
        return (
          listing.place.toLowerCase().includes(queryValuePlace)
          || listing.city.toLowerCase().includes(queryValueCity)
          // || if(listing.sqfeet >= queryValueSqfeet)
        )
      }
    })
  }

  render () {
    return (
      <div className="availableSpace">
        <h4>Available Spaces for your Search</h4>
        <Listing listings={this.props.listings} />
      </div>
    )
  }
}

export default AvailableSpace
