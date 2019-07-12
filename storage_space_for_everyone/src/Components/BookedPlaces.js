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
        ? <h4>Please Book a Space</h4>
        : <FavListing listings={filterSearchDisplay()} />
      }
    </div>
  )
}

export default BookedPlaces
