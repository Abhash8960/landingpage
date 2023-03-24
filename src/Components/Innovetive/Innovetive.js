import React from 'react';
import "./Innovetive.css";
import doctorWomen from '../../images/doctor-woman.png';
import doctorMale from '../../images/doctor-woman copy.png';
import ambulance from '../../images/ambulance.png';

export default function Innovetive() {
    return (
        <>
            <div className='inno'>
                <div className='inno_container'>
                    <div className='inno_div'>
                        <div className='inno_left'>
                            <div className='inno_left_main'>
                                <h1 className='inno-h1'>Clinic With Innovative</h1>
                                <p className='inno-p'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>

                                <button className='btn'>Learn More</button>

                            </div>
                        </div>


                        <div className='inno_right'>
                            <div className='inno_right_main'>
                            <div className='doctor'>
                                <img src={doctorWomen} alt="Rectangle" className='inno_img' />
                                <p className='inno_para'>Qualified Doctors</p>
                            </div>
                            <div className='emergency'>
                                <img src={doctorMale} alt="Rectangle" className='inno_img' />
                                <p className='inno_para'>Emergency Care</p>
                            </div>
                            <div className='ambulance'>
                                <img src={ambulance} alt="Rectangle" className='inno_img' />
                                <p className='inno_para'>24 Hours Service</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
