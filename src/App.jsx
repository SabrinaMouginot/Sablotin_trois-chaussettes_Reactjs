import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Anecdote from './pages/Anecdote';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anecdote/:day" element={<Anecdote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
