import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashbord from './pages/Dashbord';
import Hero from './components/Hero';

const App = () => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div className="bg-slate-100 min-h-screen relative">
      <Navbar setModelOpen={setModelOpen} />

      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </div>

      {modelOpen && <Login modelOpen={modelOpen} setModelOpen={setModelOpen} />}
    </div>
  );
};

export default App;
