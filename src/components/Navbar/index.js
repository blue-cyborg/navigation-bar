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
          <NavLink to='/Index' activeStyle>
            Home
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/Annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/Team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/Blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/SignUp' activeStyle>
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