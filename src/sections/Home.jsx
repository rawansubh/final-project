import React, { useContext } from 'react'
import './Home.css'


const Home = () => {
  const downloadCV = () =>{
    window.open("https://drive.google.com/uc?export=download&id=1IU10iX9NNF2o9MrQzrLaXqpajyfryt3J")
  }
  return (
    <section id='home' >
        <div className='title'>
        <h1><span>HEY!</span>I’m RAWAN,</h1>
      <h1>Frontend Developer
</h1>
<p>Agency-quality Webflow websites with the personal touch of a freelancer.
</p>
<button onClick={downloadCV}>Download Cv</button>
        </div>
    </section>
  )
}

export default Home