import React from 'react';
import { MdChecklist } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

function Guidance() {
    return (
        <div>

            <div className='guidance' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                <div style={{ backgroundColor: '#7757f4', width: '620px', height: '411px', borderRadius: '20px 0px 0px 0px', }}>
                    <h1 style={{ color: 'white', marginLeft: '70px', marginTop: '60px' }}>Intelligent Guidance</h1>
                    <p
                        style={{
                            color: 'white',
                            marginLeft: '70px',
                            marginRight: '70px',
                            fontSize: '20px',
                            lineHeight: '35px',
                        }}>
                        Our AI-powered plateform provides step-by-step guidance as you build your resume.
                        From selecting the right template to tailoring content,
                        our AI ensures your resume reflects your unique stengths.
                    </p>

                    <button className='btnSignIn' style={{ marginLeft: '70px' }}>Try now</button>
                </div>
                <div style={{ marginTop: '1.5px' }}>
                    <img src='../images/guidance.png' alt='loading..' />
                </div>
            </div>

            <div style={{
                backgroundColor: 'white',
                height: '125px',
                display: 'flex',
                justifyContent: "space-around",
                alignItems: 'center',
                width: '1241px',
                // marginLeft: '302px',
                marginLeft: '100px',
                marginTop: '-3px',
                borderRadius: "0px 0px 20px 20px",
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                        border: '1px solid #7757F4',
                        borderRadius: '5px',
                        width: '60px',
                        height: '55px'
                    }}>
                        <MdChecklist style={{ padding: '2px', borderRadius: '6px', backgroundColor: '#7757F4', color: 'white', fontSize: '32px', marginLeft: '12px', marginTop: '10px' }} />
                    </div>
                    <div style={{ fontSize: '18px' }}>Step by step guidance</div>
                </div>


                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                        border: '1px solid #7757F4',
                        borderRadius: '5px',
                        width: '60px',
                        height: '55px'
                    }}>
                        <MdLibraryBooks style={{ padding: '2px', borderRadius: '6px', color: '#7757F4', fontSize: '32px', marginLeft: '12px', marginTop: '10px' }} />
                    </div>
                    <div style={{ fontSize: '18px' }}>Select from curated templates</div>
                </div>


                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                        border: '1px solid #7757F4',
                        borderRadius: '5px',
                        width: '60px',
                        height: '55px'
                    }}>
                        <IoEyeSharp style={{ padding: '2px', borderRadius: '6px', color: '#7757F4', fontSize: '32px', marginLeft: '12px', marginTop: '10px' }} />
                    </div>
                    <div style={{ fontSize: '18px' }}>Realtime resume preview</div>
                </div>

            </div>


            <div style={{display: 'flex', marginTop: '180px', justifyContent: 'space-around' }}>
                <div style={{ marginLeft: '260px' }} >
                    <img style={{ marginLeft: '-50px', marginTop: '150px' }} src='../images/Rectangle149.png' alt='loading...' />
                    <div>
                        <img style={{ zIndex: '100', marginTop: '-200px', }} src='../images/guidance3.png' alt='loading...' />
                    </div>
                    <div style={{ marginLeft: '510px', marginTop: '-340px' }}>
                        <img src='../images/Rectangle143.png' alt='loading...' />
                    </div>
                    <div>
                        <img style={{ marginLeft: '502px', marginTop: '150px' }} src='../images/Ellipse856.png' alt='loading..' />
                    </div>

                </div>
                <div>
                    <h1>User-Friendly Interface</h1>
                    <p style={{width:'500px', fontSize:'18px', color:'#616161', lineHeight:'30px'}}>
                        No more struggling with complex
                        formatting tools. Our intuitive
                        interface makes it easy to enter
                        your information, choose from a
                        variety of templates, and customize
                        your resume effortlessly.
                    </p>
                    <div style={{marginLeft:'-100px'}}>
                        <img src='../images/Arrow 9.png' alt='loading...' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Guidance