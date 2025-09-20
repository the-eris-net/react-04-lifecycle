import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import { AliveScope } from 'react-activation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AliveScope />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <AliveScope />
    </BrowserRouter>
  </StrictMode>
);
