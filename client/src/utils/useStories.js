import { useState, useEffect } from 'react';
import { fetchIdsByCategory, fetchStories } from '../api/hackerNews';

const useStories = (category, currentPage) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const idArray = await fetchIdsByCategory(category);
        const startPage = (currentPage - 1) * 30;
        const endPage = startPage + 30;
        const idsToFetch = idArray.slice(startPage, endPage);

        const fetchedStories = await Promise.all(
          idsToFetch.map((id) => fetchStories(id))
        );
        setStories(fetchedStories);
      } catch (error) {
        setErr(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category, currentPage]);

  return { stories, isLoading, err };
};

export default useStories;
