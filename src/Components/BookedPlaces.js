import React from 'react'
import FavListing from './FavListing'

function BookedPlaces (props) {

  const filterSearchDisplay = () => {
    if (props.currentUser.length < 1) {
      return null
    } else {
      return props.favListings.filter(listing => {
        return (
          listing.user.id == props.currentUser[0].id
        )
      })
    }
  }

  return (
    <div className="availableSpace">
      <h3>Booked Spaces</h3>
      {filterSearchDisplay() === null
        ? <h1>Access All Your Cool Containers By Logging In!</h1>
        : <FavListing listings={filterSearchDisplay()} />
      }
    </div>
  )
}

export default BookedPlaces
