import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className='font-dmsans'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='info' element={<MoreInfo />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
