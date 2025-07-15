import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  // const pathname = window.location.pathname;

  // const renderPage = () => {
  //   switch (pathname) {
  //     case '/login':
  //       return <Login />;
  //     case '/register':
  //       return <Register />;
  //     case '/admin':
  //       return <Admin />
  //     case '/':
  //     default:
  //       return <Home />;
  //   }
  // };
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
