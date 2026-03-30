import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom'; 
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Badge } from 'reactstrap';
import "./Navbar.css"
import monyet from '../../../src/assets/monyet.png'

const MyNavbar = () => {
  const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#adff2f' : '#ffffff',
  fontWeight: '500', 
  textDecoration: 'none',
  borderBottom: isActive ? '0px solid #adff2f' : 'none',
  paddingBottom: '1px', 
  transition: '0.3s ease'
});

  return (
    <Container className="pt-4 d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <Navbar expand="md" className="navbar-pill px-4 py-2 shadow-sm d-flex align-items-center">
          
          <NavbarBrand href="/" className="text-white me-auto">
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>PeTikBook.com</span>
          </NavbarBrand>

          <Nav className="mx-auto d-flex flex-row" navbar>
            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/" 
                style={navLinkStyle} 
                className="px-3"
              >
                Home
              </NavLink>
            </NavItem>     
            <NavItem className="position-relative">
  <NavLink 
    tag={RRNavLink} 
    to="/status" 
    style={navLinkStyle}
    className="px-3 d-flex align-items-center"
  >
    Status Peminjaman
    <Badge 
      color="danger" 
      pill 
      style={{ 
        fontSize: '0.6rem', 
        marginLeft: '5px',
        padding: '2px 5px' 
      }}
    >
      15+
    </Badge>
  </NavLink>
</NavItem>
            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/daftar-buku" 
                style={navLinkStyle}
                className="px-3"
              >
                Daftar Buku
              </NavLink>
            </NavItem>
          </Nav>

          <div className="ms-auto d-flex align-items-center">
            <img 
              src={monyet}
              alt="User" 
              className="rounded-circle"
              style={{ width: '35px', height: '35px', border: '2px solid white', objectFit: 'cover' }}
            />
          </div>
        </Navbar>
      </div>
    </Container>
  );
}

export default MyNavbar;