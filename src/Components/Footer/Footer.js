import React from 'react'
import "./Footer.css";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { Link } from 'gatsby';

export default function Footer() {
    return (
        <>

            <div className='footer'>
                <div className="footer_main footer_container">
                    <div className="footer_left">
                        <h1><span className="medi">Medi</span><span className="care">Care+</span></h1>
                    </div>

                    <div className="footer_right" >
                        <p className="footer_menu"><Link to="/">Home</Link></p>
                        <p className="footer_menu"><Link to="/about">About</Link></p>
                        <p className="footer_menu"><Link to="/services">Services</Link></p>
                        <p className="footer_menu"><Link to="/news">News</Link></p>

                    </div>
                    <div>
                        <label htmlFor='a' className="icon-burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="footer_back">
                <div className='footer_container'>
                    <div className="footer_img">
                        <img src={facebook} alt="facebook" className="footer_image" />
                        <img src={google} alt="google" className="footer_image" />
                        <img src={twitter} alt="twitter" className="footer_image" />
                    </div>
                    <span className="footer_para">&#169;2020 PodPayment-2020</span>
                </div>
            </div>
        </>
    )
}