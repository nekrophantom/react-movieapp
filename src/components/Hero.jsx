import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="hero bg-base-200 min-h-[500px]" style={{ backgroundImage: 'url(/assets/img/hero.png)' }}>
        <div className="hero-content flex-col lg:flex-row-reverse mt-50">
          <div>
            <h1 className="text-5xl font-bold">Duty After School</h1>
            <p className="py-6">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            </p>
            <div className="flex items-center gap-3 justify-between">
              <div>
                <button className="btn btn-primary">Mulai</button>
                <button className="btn btn-secondary ml-3">Selengkapnya</button>
              </div>
              <button className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M3 9v6h4l5 5V4L7 9H3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero