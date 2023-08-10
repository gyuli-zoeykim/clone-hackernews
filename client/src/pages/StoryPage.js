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

  if (err) {
    return <p>Error fetching stories: {err.message}</p>;
  }

  const listItems = Array.from({ length: 30 }, (_, index) => (
    <li key={index} className="skeleton story-list"></li>
  ));

  return (
    <div className="story-container">
      <h4 className="heading">{capitalizeCategory}</h4>
      {isLoading ? (
        <ul className="story-list-group">{listItems}</ul>
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
