import React, { useState } from 'react';
import useStories from '../utils/useStories';
import { handlePrevPage, handleNextPage } from '../utils/handlePrevNext';
import './StoryPage.css';
import StoryItems from '../components/StoryItems';

const StoryPage = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { stories, isLoading, err } = useStories(category, currentPage);
  const capitalizeCategory =
    category.charAt(0).toUpperCase() + category.slice(1) + ' Stories';

  // const handlePrevPage = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  //   window.scrollTo(0, 0);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  //   window.scrollTo(0, 0);
  // };

  if (err) {
    return <p>Error fetching data: {err.message}</p>;
  }

  return (
    <div className="story-container">
      <h4 className="heading">{capitalizeCategory}</h4>
      {isLoading ? (
        <p className="text">Loading...</p>
      ) : (
        <>
          <ul className="story-list-group">
            {stories.map((story, index) => (
              <StoryItems
                key={index}
                story={story}
                index={index}
                currentPage={currentPage}
                category={category}
              />
            ))}
          </ul>
          <div className="btn-container">
            <button
              className="prev-btn"
              onClick={() => handlePrevPage(setCurrentPage)}
              disabled={currentPage === 1}>
              Prev
            </button>
            <button
              className="next-btn"
              onClick={() => handleNextPage(setCurrentPage)}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StoryPage;
