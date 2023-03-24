import React from 'react'
import "./Custmor.css";
import Oval from "../../images/Oval.png";
import Ovall from "../../images/Ovall.png";

export default function Customr() {
    return (
        <>
            <div className='custmor'>
                <h1 className='custmor_head'>What Our Customers Say</h1>
                <div className="custmor_container">
                    <div className='custmor_main'>
                        <div className='custmor_left'>
                            <p className='custmor_para'>I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</p>
                            <div className='custmor_div'>
                                <img src={Oval} alt="Patient" className='custmor_img' />
                                <div className='custmor_name_div'>
                                    <h5 className='custmor_name'>Jacqueline Asong</h5>
                                    <p className='custmor_patient'>Patient</p>
                                </div>
                            </div>
                        </div>

                        <div className='custmor_left'>
                        <p className='custmor_para'>I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</p>
                            <div className='custmor_div'>
                                <img src={Ovall} alt="Patient" className='custmor_img' />
                                <div className='custmor_name_div'>
                                    <h5 className='custmor_name'>Jacqueline Asong</h5>
                                    <p className='custmor_patient'>Patient</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
