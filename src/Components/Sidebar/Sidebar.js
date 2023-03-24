import { Link } from 'gatsby';
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import "./Sidebar.css";

export default function Sidebar({ show, handleClose }) {
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h1><span className="medi">Medi</span><span className="care">Care+</span></h1>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div >
                        <p onClick={handleClose} ><Link to="/">Home</Link></p>
                        <p  onClick={handleClose} ><Link to="/about">About</Link></p>
                        <p  onClick={handleClose} ><Link to="/service">Services</Link></p>
                        <p  onClick={handleClose} ><Link to="/review">Review</Link></p>
                        <p  onClick={handleClose} ><Link to="/contact">
                            <button className="btn">Contact</button>
                        </Link></p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
