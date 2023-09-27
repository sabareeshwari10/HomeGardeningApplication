import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Top from './Top';
import ContactForm from './ContactForm';
import about from './about'; 
import "./header.css";

function Header() {
  return (
    <div>
    <Top/>

    <header>
    
    
    <NavLink id="navLink" style={({isActive})=>({color : isActive ? 'white':'black'})} to="/">Home</NavLink>

    <NavLink id="navLink" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })} to="/abouttheapp">About</NavLink>
             
    <NavLink style={({isActive})=>({color : isActive ? 'white':'black'})}to="/Services">Services</NavLink>
    <NavLink id="navLink" style={({isActive})=>({color : isActive ? 'white':'black'})}to = "/ContactForm">Contact</NavLink>
   


    </header>
    </div>
  );
}

export default Header;