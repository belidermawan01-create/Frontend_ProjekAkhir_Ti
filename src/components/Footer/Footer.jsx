import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-4 mt-5'>
      <Container>
        <Row className='text-center text-md-start'>
            <Col md={4}>
            <h5>PeTIKBook</h5>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque reprehenderit impedit, assumenda itaque tenetur blanditiis ipsam. Incidunt suscipit, error provident dolorum expedita est totam, quaerat, repellendus dicta ipsam quas itaque?
            </p>
            </Col>

            <Col md={4}>
            <h5 className='fw-bold'>Quick Link</h5>
            <ul className='list-unstyled'>
                <li>
                    <NavLink to={"/"} className='text-white text-decoration-none'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/post"} className='text-white text-decoration-none'>Status Peminjaman</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className='text-white text-decoration-none'>Daftar Buku</NavLink>
                </li>
            </ul>
            </Col>

            <Col md={4}>
            <h5>Kontak Us</h5>
            <p className='small'>
               Jl. Mandor Basar No.54, Rangkapan Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16434
            </p>
            <p className='small'>Phone : (021) 77886691</p>
            <p className='small'>Email : info@petik.or.id</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
