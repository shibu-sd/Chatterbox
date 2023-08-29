import React from 'react'
import logo from "../Images/chatterbox-icon.png"

function Welcome() {
  return (
    <div className='welcome-container'>
        Welcome
        <img src={logo} alt='Logo' className='welcome-logo' />
        <p>View and text directly to the people present in the chat rooms.</p>
    </div>
  )
}

export default Welcome