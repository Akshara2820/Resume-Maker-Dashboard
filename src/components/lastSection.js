import React from 'react'

function LastSection() {
    return (
        <div>
            <div style={{ backgroundColor: '#ebe6fd', height: '390px', marginTop: '150px' }}>
                <div style={{ padding: "40px", display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                    <h1>Join the AI-Powered Revolution in Resume Building</h1>
                    <img src='../images/star.png' alt='' />
                </div>
                <p style={{ fontSize: '20px', maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', color: '#5c5b5d' }}>
                    Creating an outstanding
                    resume has never been this effortless.
                    With AI Resume Maker, you're not just crafting a
                    document—you're shaping your professional future.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <button className='btnSignIn' style={{color:'black', padding:'10px'}}>Get Started Today</button>
                </div>

            </div>
        </div>
    )
}

export default LastSection