import React from 'react';
import useStories from '../utils/useStories';
import './TopPage.css';
import StoryItems from '../components/StoryItems';

const TopPage = () => {
  const { stories, isLoading, err } = useStories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>Error fetching data: {err.message}</p>;
  }

  return (
    <div className="story-container">
      <h4 className="heading">Top Stories</h4>
      <ul>
        {stories.map((story, index) => (
          <StoryItems key={index} story={story} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TopPage;
