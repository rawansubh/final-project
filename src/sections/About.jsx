import React from 'react'
import './About.css'



const About = ({id}) => {
  return (
    <section id={id}>
      <div className="about-container">
      <div className='icons'>
      <img src='src/assets/top.png' className='icon' />
      <img src='src/assets/right.png' className='icon'></img>
      <img src='src/assets/middle.png' className='icon'></img>
      <img src='src/assets/bottom-left.png' className='icon'></img>
      <img src='src/assets/bottom-right.png' className='icon'></img>
      </div>
      <div className="disc">
        <h1>About Me </h1>
        <p>"Frontend React Developer specializing in responsive web applications, proficient in JavaScript, React.js, HTML5, CSS3, and . Currently interning at Vica Company, where I build dynamic user interfaces using modern web technologies. Passionate about clean code"</p>
        <div className="lang-container" >
          <div className="lang-item">
            <span>HTML5</span>
            <div className="group">
              <div className="bar" style={{width : '85%'}} >
                <span>85%</span>
              </div>
            </div>

        </div>
        <div className="lang-container" >
          <div className="lang-item">
            <span>CSS3</span>
            <div className="group">
              <div className="bar" style={{width : '80%'}} >
                <span>80%</span>
              </div>
            </div>
            </div>
            </div>
            <div className="lang-container" >
          <div className="lang-item">
            <span>JavaScript</span>
            <div className="group">
              <div className="bar" style={{width : '85%'}} >
                <span>75%</span>
              </div>
            </div>

        </div>
        </div>
        <div className="lang-container" >
          <div className="lang-item">
            <span>React</span>
            <div className="group">
              <div className="bar" style={{width : '90%'}} >
                <span>90%</span>
              </div>
            </div>

        </div>
</div>
</div>
</div>
      </div>





      </section>
  )
}



export default About