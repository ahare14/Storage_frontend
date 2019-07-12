import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <header className='banner'>
      <h1>Container Boy: Your Pal to Make Space</h1>
      <img src='https://i.ytimg.com/vi/DMoX5PjqB-o/maxresdefault.jpg'></img>
      <button><Link to='/login' style={{textDecoration: 'none'}}>Login Now Bruh</Link></button>
      <button><Link to='/signup' style={{textDecoration: 'none'}}>Or Sign Up Dude</Link></button>
    </header>
  )
}

export default Welcome
