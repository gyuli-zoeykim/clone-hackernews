import React, { useState, useEffect } from 'react';
import NestedComments from '../components/NestedComments';
import './CommentPage.css';

const CommentPage = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>0&page=${currentPage}&hitsPerPage=${commentsPerPage}`
        );
        const data = await response.json();
        setCommentsData(data.hits);
        console.log(data.hits);
      } catch (error) {
        setErr(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, commentsPerPage]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>Error fetching data: {err.message}</p>;
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="comments-container">
      <h4 className="heading">New Comments</h4>
      {commentsData.map((comment) => (
        <NestedComments key={comment.objectID} comment={comment} />
      ))}
      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}>
          Prev
        </button>
        <button className="next-btn" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentPage;
