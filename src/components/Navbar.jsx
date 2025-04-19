import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><img className="w-5" src="/assets/Logo.png" alt="" />CHILL</a>
          <ul className="menu menu-horizontal px-1">
            <li><a>Series</a></li>
            <li><a>Film</a></li>
            <li><a>Daftar Saya</a></li>
          </ul>
        </div>
        
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Profil Saya</a></li>
              <li><a>Ubah Premium</a></li>
              <li><a>Keluar</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar