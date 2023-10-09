import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
       <Link to= "/" className='title'> React Quiz App</Link>
       <hr className='Horizantal'/>
    </div>
  )
}

export default Header
