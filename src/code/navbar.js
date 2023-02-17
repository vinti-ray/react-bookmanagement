
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home Page
          </NavLink>
          <NavLink to='/#' activeStyle>
            pending
          </NavLink>
          <NavLink to='/#' activeStyle>
            pending
          </NavLink>
          <NavLink to='/createbook' activeStyle>
            Your book
          </NavLink>
          <NavLink to='/#' activeStyle>
            pending
          </NavLink>
          <NavLink to='/registration' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;