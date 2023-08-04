import React from 'react';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </>
  );
}

export default App;
