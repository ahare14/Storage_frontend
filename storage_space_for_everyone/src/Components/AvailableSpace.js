import React, { Component } from 'react';
import Listing from './Listing'

class AvailableSpace extends Component {

  filterSearchDisplay = () => {
    if (this.props.query.length === 0) {
      return this.props.listings
    } else {
      return this.props.listings.filter(listing => {
        return (
          listing.city.includes(this.props.query[0].city)
          || listing.place.includes(this.props.query[0].place)
          // || listing.sqfeet >= parseInt(props.query[0].sqfeet)
        )
      })
    }
  }


  handleClick = (event) => {
    const property_id = parseInt(event.target.value)
    const apiBody = {
      favorite: {
        user_id: this.props.userId[0].id,
        property_id: property_id
      }
    }
    fetch('http://localhost:3000/favorites',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiBody)
    }).catch(error => console.error(error.message))
  }

  render() {
    return (
      <div className="availableSpace" >
        <h4>Available Spaces for your Search</h4>
        <Listing
          listings={this.filterSearchDisplay()}
          handleClick={this.handleClick}
          user={this.props.userId}/>
      </div>
    );
  }
}

export default AvailableSpace;
