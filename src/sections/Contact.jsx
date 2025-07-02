import React from 'react'
import './Contact.css'

const Contact = ({id}) => {
  return (
    <section id={id}>
  <h6>Contact</h6>
  <h1>Let’s Discuss Your<span>Project</span> </h1>
  <div className="form-container">
    <div className="info">
      <div className="data-field">
        <img src='src/assets/tele.png'></img>
        <div className="number">
          <h6>Call me</h6>
          <p>0963946683472</p>
        </div>
      </div>
            <div className="data-field">
        <img src='src/assets/email.png'></img>
        <div className="email">
          <h6>Email me</h6>
          <p>rawansubh@gmail.com</p>
        </div>
      </div>
            <div className="data-field">
              <img src='src/assets/location.png'></img>
        <div className="location">
          <h6>Adress</h6>
          <p>Damascus,syria</p>
        </div>
    </div>
    </div>
    <div className="form-content">
      <div className="nameandemail">
        <input placeholder='Full name' ></input>
        <input placeholder='your email' ></input>
      </div>
      <input placeholder='Phone number'></input>
      <input placeholder='Message' style={{width:'100%' , height:'170px' }} ></input>
      <button>Send Message</button>

    </div>
    </div>







    </section>
  )
}

export default Contact