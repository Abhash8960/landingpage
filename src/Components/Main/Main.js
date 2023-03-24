import React from 'react';
import "./Main.css";
import Header from "../Header/Header";
import Rectangle from "../../images/Rectangle.png"

export default function Main() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='main_container'>
          <div className='main_div'>
            <div className='main_left'>
              <div className='main_left_main'>
              <h5 className='main-h5 '>Welcome to MediCare+ Clinic</h5>
              <h1 className='main-h1'>Best Specialists</h1>
              <p className='main-p'>We are on the leading edge of cancer care. Providing the full
                <br />continuum of cancer treatments and supportive care services in a
                <br />single convenient location.</p>
                <div className='button'>
              <button className='btn'>Make an Appointment</button>
              <button className="dep_btn"> Departments</button>
              </div>
              </div>
            </div>
         

          <div className='main_right'>
            <img src={Rectangle} alt="Rectangle" className='main_img' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
