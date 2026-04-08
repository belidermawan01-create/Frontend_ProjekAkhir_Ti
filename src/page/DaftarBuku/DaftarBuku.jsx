import React, { useEffect, useState } from 'react';
import { 
  Container, Row, Col, Card, CardImg, CardBody, 
  Button, Input, InputGroup, InputGroupText 
} from 'reactstrap';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios'; 
import './DaftarBuku.css';
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import iklan1 from '../../assets/iklann.png';
import iklan from '../../assets/iklan.png';
import buk from '../../assets/buk.png';
import { useNavigate } from "react-router-dom";

const DaftarBuku = () => {
  const navigate = useNavigate();

  const books = [
    { id: 1, judul: 'Bumi', karya: 'Tere Liye', rating: 4.5, label: 'Fiksi', img: buk },
    { id: 2, judul: 'Hujan', karya: 'Tere Liye', rating: 4.8, label: 'Fiksi', img: 'https://via.placeholder.com/150x200' },
    { id: 3, judul: 'Selena', karya: 'Tere Liye', rating: 4.2, label: 'Fiksi', img: 'https://via.placeholder.com/150x200' },
    { id: 4, judul: 'Computer Science', karya: 'Tere Liye', rating: 4.9, label: 'Teknik', img: 'https://via.placeholder.com/150x200' },
    { id: 5, judul: 'Senja di Jakarta', karya: 'Mochtar Lubis', rating: 3.5, label: 'Sejarah', img: 'https://via.placeholder.com/150x200' },
    { id: 6, judul: 'Negeri Para Bedebah', karya: 'Tere Liye', rating: 2.5, label: 'Fiksi', img: 'https://via.placeholder.com/150x200' },
  ];

  const [kategori, setKategori] = useState([]);

  const images = [iklan1, iklan, iklan1];
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    axios.get("https://api.allorigins.win/raw?url=https://petikbook.petik.or.id/api/genre")
      .then((res) => {
        const data = res.data.data.map((item) => item.nama_genre);
        setKategori(["Semua", ...data]); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="daftar-buku-wrapper">
      <MyNavbar />

      <div className="banner-section">
        <div className="banner-content">
          <Row className="align-items-center">
            <Col md="0" className="text-white text-center text-md-start">
              <img src={images[currentIndex]} alt="Banner" className="img-fluid banner-img" />
              <p>
                Ciptakan <span className="text-warning fw-bold">Idemu</span> yang baru dengan membaca melalui Perpustakaan digital <span className="fw-bold">PeTIKBook</span>
              </p>
            </Col>
          </Row>
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <Container className="search-filter-section">
        <div className="search-box-container">
          <InputGroup className="search-input-group">
            <Input placeholder="Cari judul buku, pengarang..." />
            <InputGroupText><FiSearch /></InputGroupText>
          </InputGroup>
        </div>

        {/* 🔥 INI TETAP SAMA, TAPI DATA DARI API */}
        <div className="filter-scroll mt-4">
          {kategori.map((kat, index) => (
            <Button key={index} outline color="primary" className="btn-filter rounded-pill">
              {kat}
            </Button>
          ))}
        </div>
      </Container>

      {/* SISANYA TIDAK DIUBAH */}
      <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Rekomendasi</h4>
          <a href="/" className="text-primary text-decoration-none">Lihat Semua &gt;</a>
        </div>
        <Row>
          {books.slice(0, 3).map((book) => (
            <Col key={book.id} xs="6" md="4" lg="2" className="mb-4">
              <Card className="book-card border-0 shadow-sm">
                <CardImg top src={book.img} alt={book.judul} />
                <CardBody className="p-2">
                  <h6 className="mb-0 text-truncate">{book.judul}</h6>
                  <p className="text-muted x-small mb-1">{book.karya}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-warning">★ {book.rating}</small>
                    <button className='btn-pinjam'
                      style={{ borderRadius: "40px", fontSize: "10px" }}
                      onClick={() => navigate("/peminjaman", { state: book })}
                    >
                      pinjam
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-4 mb-5">
        <h4 className="fw-bold mb-4">Daftar Buku</h4>
        <Row>
          {books.map((book) => (
            <Col key={book.id} xs="6" md="4" lg="2" className="mb-4">
              <Card className="book-card border-0 shadow-sm">
                <CardImg top src={book.img} alt={book.judul} />
                <CardBody className="p-2">
                  <h6 className="mb-0 text-truncate">{book.judul}</h6>
                  <p className="text-muted x-small mb-1">{book.karya}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-warning"><b>★★★★</b> {book.rating}</small>
                    <button className='btn-pinjam' style={{borderRadius:"40px",fontSize:"10px"}} onClick={() => navigate("/peminjaman")}>
                      pinjam
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default DaftarBuku;