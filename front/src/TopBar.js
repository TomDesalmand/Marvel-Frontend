import React from 'react'
import "./TopBar.css"
import logo from "./marvel.png"

function TopBar() {
  return (
    <div className='rectangle'>
        <img src={logo} alt="Logo" style={{width:'200px', height: '200px', marginTop: '-40px'}}/>
    </div>
  )
}

export default TopBar