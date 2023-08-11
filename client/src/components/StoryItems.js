import React from 'react';
import {
  BsTriangleFill,
  BsLink45Deg,
  BsFillPersonFill,
  BsFillClockFill,
  BsFillChatRightDotsFill,
} from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import './StoryItems.css';
import timeDifference from '../utils/timeDifference';

const StoryItems = ({ story, index, currentPage }) => {
  const parsedUrl = story.url ? new URL(story.url) : null;
  const hostname = parsedUrl && parsedUrl.hostname.replace('www.', '');
  const relatedUrl = `https://news.ycombinator.com/from?site=${hostname}`;
  let relatedDetailUrl = '';
  if (hostname === 'twitter.com' || hostname === 'github.com') {
    const pathSegments = parsedUrl.pathname.split('/');
    relatedDetailUrl = `https://news.ycombinator.com/from?site=${hostname}/${pathSegments[1]}`;
  }

  const actualIndex = (currentPage - 1) * 30 + index + 1;

  return (
    <li className="story-list">
      <div className="column-one">
        <span className="rank">{actualIndex}.</span>
        <BsTriangleFill size={14} />
      </div>
      <div className="column-two">
        <div className="row-one">
          <h4>
            <a href={story.url}>{story.title}</a>
          </h4>
        </div>
        <div className="row-two">
          <div className="row-two-column-one">
            {hostname && (
              <>
                {hostname === 'twitter.com' || hostname === 'github.com' ? (
                  <div className="inner-column-full">
                    <a href={relatedDetailUrl}>
                      <BsLink45Deg size={20} />
                      {hostname}
                    </a>
                  </div>
                ) : (
                  <div className="inner-column-full">
                    <a href={relatedUrl}>
                      <BsLink45Deg size={20} />
                      {hostname}
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="row-three-column-one">
            <div id="story-score" className="inner-column-half">
              <AiFillLike size={18} />
              <span>{story.score}</span>
            </div>
            <div className="inner-column-half">
              <BsFillPersonFill size={18} />
              <span>{story.by}</span>
            </div>
          </div>
          <div className="row-four-column-one">
            <div id="story-time" className="inner-column-half">
              <BsFillClockFill size={18} />
              <span>{timeDifference(story.time)}</span>
            </div>
            <div className="inner-column-half">
              {story.descendants >= 0 ? (
                <a href={`https://news.ycombinator.com/item?id=${story.id}`}>
                  <BsFillChatRightDotsFill size={18} />
                  {story.descendants === 0
                    ? 'discuss'
                    : `${story.descendants} ${
                        story.descendants === 1 ? 'comment' : 'comments'
                      }`}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StoryItems;
