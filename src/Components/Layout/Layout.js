import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import "./Layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({children}) {
  return (
    <div className='body'>
      <Main/>
      {children}
      <Footer/>
    </div>
  )
}
