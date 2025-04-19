import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content p-10">
      <aside>
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src="/assets/Logo.png" alt="Logo" />
            <span className="font-bold text-lg">CHILL</span>
          </div>
          <br />
          &copy; 2023 Chill All Rights Reserved.
      </aside>
      <nav>
        <h6 className="footer-title">Genre</h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          <a className="link link-hover">Aksi</a>
          <a className="link link-hover">Drama</a>
          <a className="link link-hover">Komedi</a>
          <a className="link link-hover">Sains & Alam</a>
          <a className="link link-hover">Anak-anak</a>
          <a className="link link-hover">Fantasi Ilmiah & Fantasi</a>
          <a className="link link-hover">Pertualangan</a>
          <a className="link link-hover">Thriller</a>
          <a className="link link-hover">Anime</a>
          <a className="link link-hover">Kejahatan</a>
          <a className="link link-hover">Perang</a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Bantuan</h6>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Kontak Kami</a>
        <a className="link link-hover">Privasi</a>
        <a className="link link-hover">Syarat & Ketentuan</a>
      </nav>
    </footer>
  )
}

export default Footer