import React, { Component } from 'react'

class ListSpace extends Component {
  constructor(){
    super()
    this.state = {
      newSpace: {
        image: '',
        address: '',
        city: '',
        place: '',
        zipCode: '',
        storageType: 'garage',
        temp: 'yes',
        sqfeet: '',
        price: ''
      }
    }
  }

  updateForm = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(state => {
      state.newSpace[key] = value
      return state
    })
  }

  addListing = event => {
    event.preventDefault()
    const newListing = {
      image: this.state.newSpace.image,
      address: this.state.newSpace.address,
      city: this.state.newSpace.city,
      place: this.state.newSpace.place,
      zipCode: this.state.newSpace.zipCode,
      storageType: this.state.newSpace.storageType,
      temp: this.state.newSpace.temp,
      sqfeet: this.state.newSpace.sqfeet,
      price: this.state.newSpace.price,
    }
    this.props.addListing(newListing)
    this.setState(state => {
      state.newSpace.image = ''
      state.newSpace.address = ''
      state.newSpace.city = ''
      state.newSpace.place = ''
      state.newSpace.zipCode = ''
      state.newSpace.storageType = ''
      state.newSpace.temp = ''
      state.newSpace.sqfeet = ''
      state.newSpace.price = ''
      return state
    })

  }

  render() {
    return (
      <div className='listSpace'>
        <h4>List a Space</h4>
        <form onSubmit={this.addListing}>
          <input onChange={this.updateForm} type='text' name='address' value={this.state.newSpace.address} placeholder='Enter Your Address'></input>
          <input onChange={this.updateForm} type='text' name='city' value={this.state.newSpace.city} placeholder='Enter Your City'></input>
          <input onChange={this.updateForm} type='text' name='place' value={this.state.newSpace.place} placeholder='Enter Your State'></input>
          <input onChange={this.updateForm} type='text' name='zipCode' value={this.state.newSpace.zipCode} placeholder='Enter Your Zip Code'></input>
          <select onChange={this.updateForm} name='storageType' value={this.state.newSpace.storageType}>
            <option disabled>Please select a space storageType</option>
            <option value='garage'>Garage</option>
            <option value='basement'>Basement</option>
            <option value='room'>Room</option>
          </select>
          <input onChange={this.updateForm} type='number' name='sqfeet'value={this.state.newSpace.sqfeet} placeholder='Size of Space in Sq ft'></input>
          <input onChange={this.updateForm} type='number' name='price' value={this.state.newSpace.price} placeholder='Price per Sq ft'></input>
          <select onChange={this.updateForm} name='temp' value={this.state.newSpace.temp}>
            <option disabled>Temp Controlled Y/N </option>
            <option value='yes'>Yes</option>
            <option value='no'>no</option>
          </select>
          <input onChange={this.updateForm} type="text" name='image' value={this.state.newSpace.image} placeholder="Upload an Image"></input>
          <input type='submit'></input>
        </form>
      </div>

    )
  }
}


export default ListSpace
