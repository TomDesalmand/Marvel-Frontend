import React from 'react'

function Comics(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{"On sale: " + props.release}</p>
        <p>{"Price: $" + props.price}</p>
    </div>
  )
}

export default Comics