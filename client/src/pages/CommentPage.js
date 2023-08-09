import React, { useState, useEffect } from 'react';
import NestedComments from '../components/NestedComments';
import './CommentPage.css';
import { useNavigate } from 'react-router-dom';
import { handlePrevPage, handleNextPage } from '../utils/handlePrevNext';

const CommentPage = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>0&page=${currentPage}&hitsPerPage=${commentsPerPage}`
        );
        const data = await response.json();
        setCommentsData(data.hits);
        console.log(data.hits[1].comment_text);
      } catch (error) {
        setErr(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, commentsPerPage, navigate]);

  if (err) {
    return <p>Error fetching data: {err.message}</p>;
  }

  return (
    <div className="comments-container">
      <h4 className="heading">New Comments</h4>
      {isLoading ? (
        <p className="text">Loading...</p>
      ) : (
        <>
          {commentsData.map((comment) => (
            <NestedComments
              key={comment.objectID}
              comment={comment}
              setCurrentPage={setCurrentPage}
            />
          ))}
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

export default CommentPage;
