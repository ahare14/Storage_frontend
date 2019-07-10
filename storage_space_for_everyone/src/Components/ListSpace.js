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
        type: 'garage',
        temp: 'yes',
        sqfeet: 0,
        price: 0
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
      type: this.state.newSpace.type,
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
      state.newSpace.type = ''
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
          <select onChange={this.updateForm} name='type' value={this.state.newSpace.type}>
            <option disabled>Please select a space type</option>
            <option value='garage'>Garage</option>
            <option value='basement'>Basement</option>
            <option value='room'>Room</option>
          </select>
          <input type='number' name='sqfeet' placeholder='Size of Space in Sq ft'></input>
          <input type='number' name='price' placeholder='Price per Sq ft'></input>
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
