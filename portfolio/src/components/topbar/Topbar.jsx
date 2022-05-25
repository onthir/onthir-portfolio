import React from 'react';
import "./topbar.scss";


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")} id='topbar'>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>onthir.</a>
                <div className="itemContainer">
                    <span>+1 (318)-789-4132</span>
                </div>
                <div className="itemContainer">
                    <span>bibek09@outlook.com</span>
                </div>
                
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>


                </div>
            </div>
            
        </div>
    </div>
    
  )
}
