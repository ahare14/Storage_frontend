import React from 'react'

function Listing(props) {
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
        {
          props.listings.map((listing) => {
            return (
              <tr key={listing.id}>
                <td><img src={listing.image} alt="Location View"></img></td>
                <td>{listing.address}</td>
                <td>{listing.city}</td>
                <td>{listing.place}</td>
                <td>{listing.zipCode}</td>
                <td>{listing.storageType}</td>
                <td>{listing.temp}</td>
                <td>{listing.sqfeet}</td>
                <td>${listing.price}</td>
                  <td>
                      <button value={listing.id} onClick={event=>props.handleClick(event)}>Book</button>
                  </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Listing
