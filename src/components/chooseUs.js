import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FaWandMagicSparkles } from "react-icons/fa6";
function ChooseUs() {
    return (
        <div>
            <div style={{ marginTop: '-180px' }}>
                <img src='../images/heroResume.png' alt='loading...' style={{ marginLeft: '360px' }} />
            </div>

            <div style={{ fontSize: '38px', fontWeight: '700', marginLeft: '150px', marginTop: '80px' }}>Why choose AI resume maker?</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img src='../images/choose_resume.png' alt='loading...' style={{ marginLeft: '150px', marginTop: '30px' }} />
                    <div>
                        <img src='../images/arrow.png' alt='loading' style={{ marginLeft: '620px', marginTop: '-150px' }} />
                    </div>
                </div>
                
                <div>
                    <img src='../images/whiteCard.png' alt='loading...' style={{ marginTop: '-100px' }} />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            zIndex: '1',
                            marginTop: '-520px',
                            marginLeft: '100px',
                            left: '900px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e5e5e5', width: '40px', height: '40px', borderRadius: '50%' }}>
                            <IoEyeSharp style={{color:'#737373', fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: '500', marginTop: '40px' }}>Real-time preview</div>
                            <div style={{color:'#525252', marginTop: '5px', fontSize: '17px', width: '360px' }}>preview the resumes real-time while adding the details.</div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            zIndex: '1',
                            marginLeft: '100px',
                            marginTop:'-20px',
                            left: '900px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e5e5e5', width: '40px', height: '40px', borderRadius: '50%' }}>
                            <MdLibraryBooks style={{color:'#737373', fontSize: '20px', marginLeft: '10px' }} />
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: '500', marginTop: '40px' }}>Templates Library</div>
                            <div style={{color:'#525252', marginTop: '5px', fontSize: '17px', width: '360px' }}>Select from a wide range of templates that suits your professional needs.</div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            zIndex: '1',
                            marginLeft: '100px',
                            marginTop:'-20px',
                            left: '900px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e5e5e5', width: '40px', height: '40px', borderRadius: '50%' }}>
                            <FiBox style={{color:'#737373', fontSize: '20px', marginLeft: '10px' }} />
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: '500', marginTop: '40px' }}>Dynamic Content Generation</div>
                            <div style={{color:'#525252', marginTop: '5px', fontSize: '17px', width: '360px' }}>Automatically creates content based on your inputs.</div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            zIndex: '1',
                            marginLeft: '100px',
                            left: '900px',
                            marginTop:'-20px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e5e5e5', width: '40px', height: '40px', borderRadius: '50%' }}>
                            <FaWandMagicSparkles style={{color:'#737373', fontSize: '20px', marginLeft: '10px' }} />
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: '500', marginTop: '40px' }}>Keyword optimization</div>
                            <div style={{color:'#525252', marginTop: '5px', fontSize: '17px', width: '360px' }}>Strategically select and incorporate relevant keywords within the content of your resume or CV</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs