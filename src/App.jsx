import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const pathname = window.location.pathname;

  const renderPage = () => {
    switch (pathname) {
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/admin':
        return <Admin />
      case '/':
      default:
        return <Home />;
    }
  };
  
  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
