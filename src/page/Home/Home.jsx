import React from 'react';
import { Container, Row, Col, Button, Card, CardImg, CardBody } from 'reactstrap';
import './Home.css';

import heroImg from "../../assets/figure-hero-image.webp";
import bukuuu from "../../assets/Bukuuu.png";
import Terlaris1 from "../../assets/terlaris1.jpeg";
import Terlaris2 from "../../assets/terlaris2.jpeg";
import Foto3 from "../../assets/terlaris3.jpeg"; 
import Foto4 from "../../assets/terlaris4.jpeg";
import Foto5 from "../../assets/terlaris1.jpeg";

const Home = () => {
  return (
    <div className="home-wrapper">
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
       <section className="books-section py-5 ">
  <Container>

    <div className="text-center mb-5">
      <small className="text-uppercase text-white">Some Quality Items</small>
      <h2 className="fw-bold text-white">New Release Books</h2>
    </div>

    <Row className="g-4">

      {[
        {img: Terlaris1, title:"Simple Way Of Piece Life", author:"Armor Ramsey", price:"Pinjam"},
        {img: Terlaris2, title:"Great Travel At Desert", author:"Sanchit Howdy", price:"Pinjam"},
        {img: Foto3, title:"The Lady Beauty Scarlett", author:"Arthur Doyle", price:"Pinjam"},
        {img: Foto4, title:"Once Upon A Time", author:"Kilen Marry", price:"Pinjam"}
      ].map((book, index)=>(
        
        <Col md="3" key={index}>
          
          <Card style={{borderRadius:"25px"}} className="border-0  shadow-sm text-center book-card">

            <div className="book-img-wrapper">
              <CardImg
              style={{padding:"20px",borderRadius:"30px"}} 
                top
                src={book.img}
                alt={book.title}
                className="book-img"
              />

              <button className="add-cart-btn">
                DETAIL BUKU
              </button>
            </div>

            <CardBody>
              <h6 className="fw-semibold">{book.title}</h6>
              <small className="text-muted d-block">{book.author}</small>
              <Button color="primary" className="rounded-pill px-4">{book.price}</Button>
            </CardBody>

          </Card>

        </Col>

      ))}

    </Row>

  </Container>
</section>
    </div>
  );
};

export default Home;