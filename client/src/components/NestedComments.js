import React from 'react';
import {
  BsTriangleFill,
  BsFillPersonFill,
  BsFillClockFill,
} from 'react-icons/bs';
import timeDifference from '../utils/timeDifference';
import './NestedComments.css';
import DOMPurify from 'dompurify';

const NestedComments = ({ comment }) => {
  const createMarkup = () => ({
    __html: DOMPurify.sanitize(comment.comment_text),
  });

  return (
    <div className="comment-list">
      <div className="column-one">
        <BsTriangleFill size={14} style={{ marginTop: '2px' }} />
      </div>
      <div className="column-two">
        <div className="row-one">
          <div className="inner-column">
            <BsFillPersonFill size={18} />
            <span>{comment.author}</span>
          </div>
          <div className="inner-column">
            <BsFillClockFill size={18} />
            <span>{timeDifference(comment.created_at_i)}</span>
          </div>
          <div className="inner-column">
            <a
              href={`https://news.ycombinator.com/item?id=${comment.parent_id}`}>
              parent
            </a>
            <span> | </span>
            <a
              href={`https://news.ycombinator.com/item?id=${comment.story_id}#${comment.objectID}`}>
              context
            </a>
          </div>
        </div>
        <div className="row-two">
          <a href={`https://news.ycombinator.com/item?id=${comment.objectID}`}>
            on: {comment.story_title}
          </a>
        </div>
        <div className="row-three">
          <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

export default NestedComments;
