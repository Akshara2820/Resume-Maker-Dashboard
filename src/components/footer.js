import React from 'react'

function Footer() {
    return (
        <div style={{ backgroundColor: '#171717', height: '360px' }}>

            <div style={{ padding: '80px', display: 'flex', justifyContent: 'space-between', }}>

                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div className='rectangleShape'>
                            <div className='rectangleShape2'></div>
                        </div>
                        <div><h1>Resume.AI</h1></div>
                    </div>
                </div>
                <div style={{ display: 'flex', color: 'white' }}>
                    <div className='vertical-line '></div>
                    <div>
                        <p>Home</p>
                        <p>About Us</p>
                    </div>
                </div>

                <div style={{ display: 'flex', color: 'white' }}>
                    <div className='vertical-line '></div>
                    <div>
                        <p>Testimonials</p>
                        <p>Clients</p>
                    </div>
                </div>

                <div style={{ display: 'flex', color: 'white' }}>
                    <div className='vertical-line '></div>
                    <div>
                        <p>Contact Us</p>
                    </div>
                </div>

            </div>

            <div>
                <div className='horizontal-line'></div>
                <div style={{ color: 'white', alignItems:'center', display: 'flex', justifyContent: 'space-around' }}>
                    <div>Copyright @ 2023 masters’ union</div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <p>Privacy Policy</p>
                        <div className='vertical-line2 '></div>
                        <p>Terms and Conditions</p>
                        <div className='vertical-line2 '></div>
                        <p>Cookie Policy</p>
                    </div>
                    <div>
                        <img src='../images/Frame.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer