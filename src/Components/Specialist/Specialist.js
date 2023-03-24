import React from 'react';
import "./specialist.css";
import {doctorData} from "../Data/doctorData";
 
export default function Specialist() {
    return (
        <>
            <div className='spe'>
                <div className='spe_container'>
                    <div className="spe_main">
                        <p className="spe_para">We Have The Best Specialist</p>
                        <p className="spe_para2">We have a wide experience in experience design and strategy,<br /> with locally-rooted knowledge.</p>
                        
                    </div>
                    <div className="sep_main_div">
                        {
                            doctorData.map((item) => (
                                <div className="sep_main_img">
                                <div className=" sep_img">
                                    <img src={item.img} alt="doctor" className='doctor_img'/>
                                </div>
                                <div className="dep_detail">
                                    <h1 className='sep_head'>{item.name}</h1>
                                    <p className='sep_p'>{item.spe}</p>
                                </div>
                            </div>
                            ))
                        }
                       
                    </div>
                </div>
               

            </div>
        </>
    )
}
