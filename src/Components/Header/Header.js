import { Link } from 'gatsby';
import React, { useState } from 'react';
import "./Header.css";
import Sidebar from "../Sidebar/Sidebar";


export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
    <div className='header'>
                <div className="header_main header_container">
                    <div className="header_left">
                        <h1><span className="medi">Medi</span><span className="care">Care+</span></h1>
                    </div>

                    <div className="header_right" >
                        <p className="header_menu"><Link to="/">Home</Link></p>
                        <p className="header_menu"><Link to="/about">About</Link></p>
                        <p className="header_menu"><Link to="/service">Services</Link></p>
                        <p className="header_menu"><Link to="/review">Review</Link></p>
                        <p className="header_menu"><Link to="/contact">
                        <button className="btn">Contact</button>
                          </Link></p>


                    </div>
                    <div>
                        <label htmlFor='a' className="icon-burger " onClick={handleShow}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </label>
                    </div>
                </div>
            </div>
            <Sidebar show={show} handleClose={handleClose}/>
   </>
  )
}
