import React from 'react';
import Header from './components/Header';
import StoryPage from './pages/StoryPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StoryPage category="top" />} />
        <Route path="/top" element={<StoryPage category="top" />} />
        <Route path="/new" element={<StoryPage category="new" />} />
        <Route path="/best" element={<StoryPage category="best" />} />
      </Routes>
    </>
  );
}

export default App;
