import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/page/Home/Home.jsx'; 
import Login from '../src/page/Login/Login.jsx'; 
import StatusPeminjaman from './page/StatusPeminjaman/StatusPeminjaman.jsx';
import DaftarBuku from './page/DaftarBuku/DaftarBuku.jsx';
import HalamanPeminjaman from './page/HalamanPeminjaman/HalamanPeminjaman.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statusPeminjaman" element={<StatusPeminjaman />} />
        <Route path="/daftarBuku" element={<DaftarBuku />} />
        <Route path="/peminjaman" element={<HalamanPeminjaman />} />
      </Routes>
    </Router>
  );
}

export default App;