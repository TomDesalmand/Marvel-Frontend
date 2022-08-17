import "./Detail.css"
import "./Hero.css"
import Comics from "./Comics"

import React from 'react'

function Detail(props) {
  return (
    <div style={{marginLeft:"50px", marginTop: "20px"}}>
        <div>
            <button type="button" className='button' onClick={() => props.changePage(true)}>Back to menu</button>
        </div>
        <div style={{display: "flex"}}>
            <img src={props.img} className="image_detail"/>
            <div className="name_desc_detail">
                <h1>{props.name}</h1>
                <h2>Description:</h2>
                {
                    props.desc ?
                    <p>{props.desc}</p>
                    :
                    <p>No description was found for this hero...</p>
                }
            </div>
        </div>
        {
            props.comicsList[0] ?
                <div className="comics_detail"> 
                    <h1>Latest Comics:</h1> 
                        {props.comicsList.map((comic, i) => {
                        return <Comics key={i} title={comic.title} price={comic.prices[0].price} release={comic.dates[0].date.substring(0, 10)}/>
                        })}
                </div>
                :
                <div className="comics_detail">
                    <p>No comics found for this hero...</p>
                </div>
        }
    </div>
  )
}

export default Detail