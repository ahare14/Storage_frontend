import React from 'react'

function FavListing (props) {

  const displayInfo = props.listings.map(listing => {
    return (
      <tr key={listing.id}>
        <td><img src={listing.property.image} alt="Location View"></img></td>
        <td>{listing.property.address}</td>
        <td>{listing.property.city}</td>
        <td>{listing.property.place}</td>
        <td>{listing.property.zipCode}</td>
        <td>{listing.property.storageType}</td>
        <td>{listing.property.temp}</td>
        <td>{listing.property.sqfeet}</td>
        <td>${listing.property.price}</td>
        <td><button value={listing.id} onClick={(event) => props.delete(event)}>Delete</button></td>
      </tr>
    )
  })

  return (
    <table className="displayListing">
      <thead>
        <tr>
          <th>Location Preview</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zipcode</th>
          <th>Type</th>
          <th>Temp Controlled</th>
          <th>Available Sq ft</th>
          <th>Price per Sq ft</th>
        </tr>
      </thead>
      <tbody>
        {displayInfo}
      </tbody>
    </table>
  )
}

export default FavListing
