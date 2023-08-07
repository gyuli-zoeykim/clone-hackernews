import { useState, useEffect } from 'react';
import { fetchIdsByCategory, fetchStories } from '../api/hackerNews';

const useStories = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idArray = await fetchIdsByCategory(category);
        const startPage = (currentPage - 1) * 30;
        const endPage = startPage + 30;
        const idsToFetch = idArray.slice(startPage, endPage);

        const fetchedStories = await Promise.all(
          idsToFetch.map((id) => fetchStories(id))
        );
        setIsLoading(false);
        if (currentPage === 1) {
          setStories(fetchedStories);
        } else {
          setStories((prevStories) => [...prevStories, ...fetchedStories]);
        }
      } catch (error) {
        setErr(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category, currentPage]);

  return { stories, setCurrentPage, isLoading, err };
};

export default useStories;
