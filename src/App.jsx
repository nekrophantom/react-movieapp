import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const pathname = window.location.pathname;

  const renderPage = () => {
    switch (pathname) {
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
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
