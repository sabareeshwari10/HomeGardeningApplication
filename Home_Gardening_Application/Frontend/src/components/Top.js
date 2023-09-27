import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Top.css';
import Login from './Login';
import Signup from './Signup';
import ContactForm from './ContactForm';

const Top = () => {
  return (
    <AppBar position='sticky' id="top" className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          <h1 id="title"><b>GARDAENIA</b></h1>
          <h4>GARDENING SERVICES</h4>
        </Typography>
        <ul className='nav-links'>
          <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
          {/* <li><NavLink activeClassName="active" to="/about">About</NavLink></li> */}
          {/* <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li> */}
          <li><NavLink activeClassName="active" to="/Login">Login</NavLink></li>
          <li><NavLink activeClassName="active" to="/Signup">Signup</NavLink></li>
          {/*<li><NavLink activeClassName="active" to="/ContactForm">Contact</NavLink></li>*/}
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Top;
