import React from 'react'
import './Description.css'

const Description = ({title,content}) => {
  return (
    <div className='field'>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Description