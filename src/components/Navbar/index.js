import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
export default function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/Index' >
            Home
          </NavLink>
          <NavLink to='/About' >
            About
          </NavLink>
          <NavLink to='/Events' >
            Events
          </NavLink>
          <NavLink to='/Annual' >
            Annual Report
          </NavLink>
          <NavLink to='/Team' >
            Teams
          </NavLink>
          <NavLink to='/Blogs' >
            Blogs
          </NavLink>
          <NavLink to='/SignUp' >
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
                <NavBtnLink to='/Login'>Sign In</NavBtnLink>
            </NavBtn>
      </Nav>
    </>
  );
}