import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const Register = () => {
  const [ username, setUsername ]               = useState("");
  const [ password, setPassword ]               = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  return (
    <section>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/assets/img/BG_REGISTER.jpg)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="card card-border bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title flex items-center justify-center gap-2">
                  <img src="assets/Logo.png" alt="Logo" className="h-10"></img> CHILL
                </h2>
                <h1 className="card-title flex items-center justify-center gap-2 mt-5">
                  Daftar 
                </h1>
                <p>Selamat Datang!</p>
                
                <Input label="Username" type='text' placeholder='Masukkan username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input label="Kata Sandi" type='password' placeholder='Masukkan kata sandi' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Input label="Konfirmasi Kata Sandi" type='password' placeholder='Masukkan kata sandi' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                  <p className="fieldset-label">Sudah punya akun? <a href="/login"><b>Masuk</b></a></p>
                </Input>

                <Button className="bg-base-500">
                  Daftar
                </Button>

                <p>atau</p>

                <Button className='bg-white text-black border-[#e5e5e5]'>
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Daftar dengan google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register