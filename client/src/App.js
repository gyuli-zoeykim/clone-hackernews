import React from 'react';
import Header from './components/Header';
import StoryPage from './pages/StoryPage';
import { Routes, Route } from 'react-router-dom';
import CommentPage from './pages/CommentPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StoryPage category="top" />} />
        <Route path="/top" element={<StoryPage category="top" />} />
        <Route path="/new" element={<StoryPage category="new" />} />
        <Route path="/best" element={<StoryPage category="best" />} />
        <Route path="/ask" element={<StoryPage category="ask" />} />
        <Route path="/show" element={<StoryPage category="show" />} />
        <Route path="/jobs" element={<StoryPage category="job" />} />
        <Route path="/comments" element={<CommentPage />} />
      </Routes>
    </>
  );
}

export default App;
