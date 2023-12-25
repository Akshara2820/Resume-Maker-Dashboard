import React from 'react'
import '../App.css'
function Header() {
  return (
    <div className='header' style={{
      display: 'flex',
      backgroundColor: 'white',
      height: '70px',
      justifyContent: 'space-between',
      padding: '0px 80px',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className='rectangleShape'>
          <div className='rectangleShape2'></div>
        </div>
        <div><h1>Resume.AI</h1></div>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', }}>
        <button className='btnSignIn' style={{width:'92px'}}>Sign in</button>
        <button className='btnCreate'>Create my resume</button>
      </div>
    </div>
  )
}

export default Header