import React from 'react'
import "./Hero.css"

function Hero(props) {
  return (
    <div className="rectangle_hero">
        <img src={props.img} className="hero_image"/>
        <div style={{marginLeft: "50px", fontWeight: "bold"}}>
            <h1>{props.name}</h1>
            <p>{props.desc.substring(0, 100)+"..."}</p>
            <button type="button" className='button' onClick={() => {
              props.changePage(false)
              props.changeId(props.id)
              props.changeName(props.name)
              props.changeDesc(props.desc)
              props.changeImg(props.img)
              }}>See details</button>
        </div>
    </div>
  )
}

export default Hero