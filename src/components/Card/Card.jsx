import React from 'react'
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import './Card.css'
import { Link } from 'react-router-dom'




const Card = ({id ,img , desc , lang}) => {
  return (
    <div className="card-content">
          <img src={img}></img>
    <h1>{desc}</h1>
    <div className="desc">
    <p>{lang}</p>
    <Link to={`/projects/${id}`} ><LuCircleArrowOutUpRight color='#0C96E2'/></Link>
    </div>
    </div>
    


    
  )
}
export default Card