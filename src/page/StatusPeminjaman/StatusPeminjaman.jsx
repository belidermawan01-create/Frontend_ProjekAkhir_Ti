import React from 'react';
import { Container, Card, CardBody, Row, Col, Button } from 'reactstrap';
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './StatusPeminjaman.css';
import buk from'../../assets/buk.png';

const StatusPeminjaman = () => {
  // Data Dummy (Nanti diganti dengan data dari API)
  const dataPeminjaman = [
    { id: 1, judul: 'Buya Hamka', karya: 'A. Fuadi', tgl: '1 Januari - 5 Januari 2026', img:buk, status: 'Dipinjam', color: 'primary' },
    { id: 2, judul: 'Senja di Jakarta', karya: 'Mochtar Lubis', tgl: '1 Januari - 5 Januari 2026', img:buk, status: 'Selesai', color: 'success' },
    { id: 3, judul: 'Dilan 1990', karya: 'Pidi Baiq', tgl: '1 Januari - 5 Januari 2026', img:buk, status: 'Terlambat', color: 'danger-light' },
    { id: 4, judul: 'Dilan 1990', karya: 'Pidi Baiq', tgl: '1 Januari - 5 Januari 2026', img:buk, status: 'Proses', color: 'warning' },
    { id: 5, judul: 'Pergi', karya: 'Tere Liye', tgl: '1 Januari - 5 Januari 2026', img:buk, status: 'Ditolak', color: 'dark' },
  ];

  return (
    <div className="main-wrapper">
      <MyNavbar />
      
      <Container className="my-5">
        <div className="status-list-container">
          {dataPeminjaman.map((item) => (
            <Card key={item.id} className="status-card mb-4">
              <CardBody>
                <Row className="align-items-center">
                  {/* Bagian Gambar */}
                  <Col xs="4" md="2">
                    <img style={{height:"170px",width:"120px"}} src={item.img} alt={item.judul} className="img-fluid book-cover" />
                  </Col>

                  {/* Bagian Detail */}
                  <Col xs="8" md="7">
                    <div className="book-info">
                      <h5><strong>Judul :</strong> {item.judul}</h5>
                      <p><strong>Karya :</strong> {item.karya}</p>
                      <small className="text-muted">{item.tgl}</small>
                    </div>
                    <div className="action-icons mt-3">
                      <span><i className="fa fa-heart-o"></i> Favorit</span>
                      <span className="ms-3"><i className="fa fa-share-alt"></i> Bagikan</span>
                    </div>
                  </Col>

                  {/* Bagian Tombol Status */}
                  <Col xs="12" md="3" className="text-center mt-3 mt-md-0">
                    <Button color={item.color} className="btn-status w-100 mb-2">
                      {item.status}
                    </Button>
                    <Button color="danger" className="btn-action w-100">
                      {item.status === 'Dipinjam' ? 'Kembalikan Buku' : item.status === 'Selesai' ? 'Dikembalikan' : 'Proses'}
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default StatusPeminjaman;