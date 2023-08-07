import React from 'react';
import useStories from '../utils/useStories';
import './StoryPage.css';
import StoryItems from '../components/StoryItems';

const StoryPage = ({ category }) => {
  const { stories, setCurrentPage, isLoading, err } = useStories(category);

  console.log(stories);
  const capitalizeCategory =
    category.charAt(0).toUpperCase() + category.slice(1) + ' Stories';

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>Error fetching data: {err.message}</p>;
  }

  return (
    <div className="story-container">
      <h4 className="heading">{capitalizeCategory}</h4>
      <ul className="story-list-group">
        {stories.map((story, index) => (
          <StoryItems
            key={index}
            story={story}
            index={index}
            category={category}
          />
        ))}
      </ul>
      <div className="btn-container">
        <button className="more-btn" onClick={handleLoadMore}>
          More
        </button>
      </div>
    </div>
  );
};

export default StoryPage;
