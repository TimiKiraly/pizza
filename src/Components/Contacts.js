import React from 'react'

const Contacts = () => {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'> Have a question in mind ?</h1>
      <h1 className='primary-heading'id="contact"> Contact us</h1>
      <div className='contact-form-container'>
        <input type="text" className="email"placeholder='youremail@gmail.com'/>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  )
}

export default Contacts;
