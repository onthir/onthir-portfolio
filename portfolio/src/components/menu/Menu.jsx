import React from 'react';
import "./menu.scss";
import {useState} from "react";


export default function Menu({menuOpen, setMenuOpen}) {

  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#intro">Portfolio</a>
            </li>
            <li>
                <a href="#intro">Works</a>
            </li>
            <li>
                <a href="#intro">Testimonials</a>
            </li>
            <li>
                <a href="#intro">Contact</a>
            </li>

        </ul>
    </div>
  )
}
