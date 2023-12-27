import React from 'react'
import '../App.css';
import { FaWandMagicSparkles } from "react-icons/fa6";

function HeroSection() {
    return (
        <div className='hero-contanier'>


            <div style={{ position: 'absolute', top: '100px', left: '180px', }}>
                <img src='../images/hexagon.png' alt='loading' />
            </div>

            <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: '2' }}>

                <div style={{ display: 'flex', justifyContent: 'space-around', }}>
                    <div className='heroWhiteTemplate' style={{ width: '225px', marginTop: '50px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className='circle'>
                                <FaWandMagicSparkles style={{ color: 'white', marginLeft: '0px', marginTop: '10px' }} />
                            </div>
                            <div style={{ fontSize: '17px', fontWeight: '500' }}>Templates Library</div>
                        </div>

                    </div>
                    <div className='heroWhiteTemplate' style={{ width: '225px', marginTop: '50px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className='circle'>
                                <FaWandMagicSparkles style={{ color: 'white', marginLeft: '0px', marginTop: '10px' }} />
                            </div>
                            <div style={{ fontSize: '17px', fontWeight: '500' }}>Real-time preview</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className='heroWhiteTemplate' style={{ width: '255px', marginTop: '50px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className='circle'>
                                <FaWandMagicSparkles style={{ color: 'white', marginLeft: '0px', marginTop: '10px' }} />
                            </div>
                            <div style={{ fontSize: '17px', fontWeight: '500' }}>Keyword Optimization</div>
                        </div>

                    </div>
                    <div>
                        <div style={{ fontSize: '45px', width: '500px', height: '240px', lineHeight: '60px', fontWeight: '500' }}>
                            Welcome to <span style={{ fontWeight: '700', color: '#7757f4' }}>AI Resume Maker !</span> Your path to professional success !
                        </div>
                        <div style={{ marginLeft: '140px' }}>
                            <button className="btnCreate" >Start building</button>
                        </div>

                    </div>
                    <div className='heroWhiteTemplate' style={{ width: '305px', marginTop: '50px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className='circle'>
                                <FaWandMagicSparkles style={{ color: 'white', marginLeft: '0px', marginTop: '10px' }} />
                            </div>
                            <div style={{ fontSize: '17px', fontWeight: '500' }}>Dynamic Content Generation</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection