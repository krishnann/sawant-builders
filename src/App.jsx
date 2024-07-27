import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackToTop from "./components/BackToTop";
import { Outlet } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
