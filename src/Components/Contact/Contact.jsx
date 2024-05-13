import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsam non consequatur dicta vitae debitis aspernatur obcaecati eum cum excepturi.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@anubhavsharma.dev</li>
          <li><img src={phone_icon} alt="" />4444666649</li>
          <li><img src={location_icon} alt="" />Lorem ipsum dolor <br /> MA 02134 ,India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
