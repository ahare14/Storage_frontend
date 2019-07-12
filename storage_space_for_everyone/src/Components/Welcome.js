import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <header className='banner'>
      <h1>Welcome to (Logo)</h1>
      <button><Link to='/login' style={{textDecoration: 'none'}}>Login Now Bruh</Link></button>
      <button><Link to='/signup' style={{textDecoration: 'none'}}>Or Sign Up Dude</Link></button>
    </header>
  )
}

export default Welcome
