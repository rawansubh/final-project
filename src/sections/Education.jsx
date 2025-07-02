import React from 'react'
import Description from '../components/Description/Description'
import './Education.css'
import { FaArrowUp } from "react-icons/fa";

const Education = ({id}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior : "smooth",
    })
  }
  return (
    <section id={id}>
      <div className="title">
        <span>Education and Experience</span>
        <h1>Education & Experience</h1>
      </div>
      <div className="table">
          <Description title="electronics and communications Engineer" content="Mechanical and Electronics Factuly-Damascus University"></Description>
          <Description title="Frontend Developer Intern" content="VICA Company|2025 , HTML , CSS3, JavaScript(ES6+) , React.js ,Git , Figma ,Team Collaboration" ></Description>
        </div>
        <div className="decoration">
        <img className='top-right' src='src/assets/Images bg (2).svg'></img>
        <img className='bottom-left' src='src/assets/Images bg (2).svg'></img>
        </div>

        <button className='scroll-btn' onClick={scrollToTop}><FaArrowUp/></button>
        <div className="info">
          <div className="desc">
            <h2>Try me out, risk free!</h2>
            <p>If you’re not happy with the design after the first draft,
            I’ll refund your deposit,<span>no questions asked</span> </p>
          </div>
          <button className="btn-contact">
            <a href='#contact'>Contact</a>
          </button>
        </div>
    </section>
  )
}

export default Education