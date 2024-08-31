import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = () => {
  return (
    <div className='header'>
        <Link className='title' to ='/'>Intuitive Quiz Hub </Link>
        <hr className='margin'></hr>
    </div>
  )
}
