// import logo from './logo.svg';
import './App.css';
import About from './components/pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Classroom from './components/Classroom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Classroom nom="JS Dev" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
