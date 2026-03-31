import React from 'react';
import { Container, Row, Col, Button, Card, CardImg, CardBody } from 'reactstrap';
import './Home.css';

import NavbarComponent from "../../components/Navbar/Navbar"
import heroImg from "../../assets/figure-hero-image.webp";
import bukuuu from "../../assets/Bukuuu.png";
import Terlaris1 from "../../assets/terlaris1.jpeg";
import Terlaris2 from "../../assets/terlaris2.jpeg";
import Foto3 from "../../assets/terlaris3.jpeg"; 
import Foto4 from "../../assets/terlaris4.jpeg";
import Foto5 from "../../assets/terlaris1.jpeg";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-wrapper">
    <NavbarComponent />
      <section className="hero-section text-dark">
        <Container>
          <Row style={{marginTop:"50px"}} className="align-items-center ">
            <Col md="6">
              <h1 className="fw-bold display-5">
                Perpustakaan <span className="text-success">Modern</span> <br />
                untuk <span style={{color:"#4E8CEA"}}>Generasi Digital</span>
              </h1>
              <p className="text-muted">
                PeTikBook by Student PeTiK adalah layanan perpustakaan digital...
              </p>
              <Button color="primary" className="rounded-pill px-4">Lihat Buku</Button>
            </Col>
            <Col md="6" className="text-center">
              <img style={{width:"400px"}} src={heroImg} alt="Mockup" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        
      </section>

      <br /><br />

       {/* Buku Terlaris */}
       <section style={{borderRadius:"150px",background:"rgba(128, 128, 128, 0.479)"}} className="books-section py-5">
  <Container>

    <div className="text-center mb-5">
      <small className="text-uppercase text-muted"><b>Some Quality Items</b> </small>
      <h2 className="fw-bold">
        <span className='text-success'>New</span> Release 
        <span className="text-primary"> Books</span>
      </h2>
    </div>

    <Row className="g-4">

      {[
        {img: Terlaris1, title:"Simple Way Of Piece Life", author:"Armor Ramsey"},
        {img: Terlaris2, title:"Great Travel At Desert", author:"Sanchit Howdy"},
        {img: Foto3, title:"The Lady Beauty Scarlett", author:"Arthur Doyle"},
        {img: Foto4, title:"Once Upon A Time", author:"Kilen Marry"}
      ].map((book, index)=>(
        
        <Col md="3" key={index}>
          
          <div className="book-card">

            {/* IMAGE */}
            <div className="book-img-wrapper">
              <img src={book.img} alt={book.title} />

              {/* OVERLAY */}
              <div className="overlay">
                <button className="detail-btn">DETAIL BUKU</button>
              </div>
            </div>

            {/* TEXT */}
            <div className="book-info">
              <h6>{book.title}</h6>
              <span>{book.author}</span>
              <button className="pinjam-btn">Pinjam</button>
            </div>

          </div>

        </Col>

      ))}

    </Row>

  </Container>
</section>
<Footer />
    </div>
  );
};

export default Home;