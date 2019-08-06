import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <header className='banner'>
      <h1>Container Pal: Your Pal to Make Space</h1>
      <img src='https://i.ytimg.com/vi/DMoX5PjqB-o/maxresdefault.jpg'></img>
      <button><Link to='/login' style={{textDecoration: 'none'}}>Login For the Sweet Storage</Link></button>
      <button><Link to='/signup' style={{textDecoration: 'none'}}>Or You Can Signup and Get Access</Link></button>
    </header>
  )
}

export default Welcome
