import React from 'react';
import {
  BsTriangleFill,
  BsLink45Deg,
  BsFillPersonFill,
  BsFillClockFill,
  BsFillChatRightDotsFill,
} from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './StoryItems.css';
import timeDifference from '../utils/timeDifference';

const StoryItems = ({ story, index }) => {
  const navigate = useNavigate();

  const handleClick = (kids, id) => {
    try {
      navigate(`/comments/${id}`, { state: { kids } });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const parsedUrl = new URL(story.url);
  const hostname = parsedUrl.hostname.replace('www.', '');

  return (
    <li key={index} className="story-container-list">
      <div className="list-container-inner">
        <div className="column-one">
          <span className="rank">{index + 1}</span>
          <BsTriangleFill size={14} />
        </div>
        <div className="column-two">
          <div className="row-one">
            <h4>
              <a href={story.url}>{story.title}</a>
            </h4>
          </div>
          <div className="row-two">
            <div className="inner-column-full">
              <BsLink45Deg size={20} />
              <a href={story.url}>{hostname}</a>
            </div>
          </div>
          <div className="row-three">
            <div className="inner-column-half">
              <AiFillLike size={18} />
              <span>{story.score}</span>
            </div>
            <div className="inner-column-half">
              <BsFillPersonFill size={18} />
              <span>{story.by}</span>
            </div>
          </div>
          <div className="row-four">
            <div className="inner-column-half">
              <BsFillClockFill size={18} />
              <span>{timeDifference(story.time)}</span>
            </div>
            <div
              className="inner-column-half"
              onClick={() => handleClick(story.kids, story.id)}>
              <BsFillChatRightDotsFill size={18} />
              {story.descendants > 0 && (
                <span>
                  {story.descendants}{' '}
                  {story.descendants === 1 ? 'comment' : 'comments'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StoryItems;
