import React from 'react';
import "./Service.css";
import tooth from "../../images/tooth.png";
import file from "../../images/medical-file.png";
import brain from "../../images/human-brain.png";
import shape from "../../images/Shape.png";

export default function Service() {
    return (
        <>
            <div className='service'>
                <div className="service_container">
                    <div className="ser_main">
                        <p className="ser_para">Our Services</p>
                        <p className="ser_para2">We provide the most full medical services, so every person could <br /> heave the oppurtunity to receive qualitative medical help.</p>
                    </div>
                    <div className='ser_main_div'>
                        <div className='ser_div'>
                            <div className='ser_image'>
                                <img src={tooth} alt="service" className='ser_img' />
                            </div>
                            <div className='ser_pbox'>
                                <p>Dental Care</p>
                            </div>
                        </div>

                        <div className='ser_divv'>
                            <div className='ser_image'>
                                <img src={shape} alt="service" className='ser_img' />
                            </div>
                            <div className='ser_pbox'>
                                <p>Pulmonary</p>
                                <div>
                                <p>Learn More</p>
                                <p>  </p>
                                </div>
                               
                            </div>
                            
                        </div>

                        <div className='ser_div'>
                            <div className='ser_image'>
                                <img src={brain} alt="service" className='ser_img' />
                            </div>
                            <div className='ser_pbox'>
                                <p>Neurological</p>
                            </div>
                        </div>

                        <div className='ser_div'>
                            <div className='ser_image'>
                                <img src={file} alt="service" className='ser_img' />
                            </div>
                            <div className='ser_pbox'>
                                <p>Prediatrics</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
