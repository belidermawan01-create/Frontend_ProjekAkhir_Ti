import React from "react";
import "./HalamanPeminjaman.css";
import bgImg from "../../assets/MacBook.png";
import { useLocation } from "react-router-dom";
import MyNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const HalamanPeminjaman = () => {
  const location = useLocation();
  const data = location.state;

  // 🔥 BIAR GAK PUTIH KOSONG
  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>Data buku tidak ditemukan 😢</h2>
        <p>Silakan kembali ke halaman daftar buku</p>
      </div>
    );
  }

  return (
    <div
      className="peminjaman-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <MyNavbar />

      <div className="peminjaman-card">
        
        {/* LEFT */}
        <div className="peminjaman-left">
          <img src={data.img} alt={data.judul} />
        </div>

        {/* RIGHT */}
        <div className="peminjaman-right">
          <h1>Judul : {data.judul}</h1>
          <p className="terbitan">Terbitan : {data.karya}</p>

          {/* RATING */}
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
            <span className="rating-value">{data.rating}</span>
          </div>

          {/* INFO */}
          <div className="info">
            <p>Stock : 3</p>
            <p>Lokasi Rak : Rak A3</p>
          </div>

          {/* AKSI */}
          <div className="aksi">
            <button className="btn-aksi">❤ Favorit</button>
            <button className="btn-aksi">🔗 Bagikan</button>
          </div>

          {/* FORM */}
          <h2>Informasi Peminjaman</h2>

          <div className="form-row">
            <input type="date" />
            <input type="number" placeholder="Lama Pinjam (Hari)" />
            <input type="text" placeholder="Estimasi Pengembalian" disabled />
          </div>

          <textarea placeholder="Catatan (opsional)"></textarea>

          <button className="btn-submit">
            Konfirmasi Peminjaman
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HalamanPeminjaman;