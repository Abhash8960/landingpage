import React from 'react';
import "./Subscribe.css";

export default function Subscribe() {
    return (
        <>
            <div className='sub'>
                <div className='sub_container'>
                    <div className="sub_main">
                        <p className="sub_para">Subscribe to Newsletter</p>
                        <p className="sub_para2">We have a wide experience in experience design and strategy,</p>
                        <div className="sub_input">
                            <input className="sub_inp" placeholder="Enter Your Email Addrss" />
                             <button className="btn">Send Now</button>
                        </div>
                    </div>
                </div>
                {/* <img src={Subimg} alt="subimg" className='sub_img'/> */}

            </div>
        </>
    )
}
