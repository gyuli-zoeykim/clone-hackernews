import { useState, useEffect } from 'react';
import { fetchTopIds, fetchStories } from '../api/hackerNews';

const useStories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idArray = await fetchTopIds();
        const fetchedStories = [];
        let i = 0;
        while (i < idArray.length && fetchedStories.length < 2) {
          const story = await fetchStories(idArray[i]);
          fetchedStories.push(story);
          i++;
        }
        setStories(fetchedStories);
        setIsLoading(false);
      } catch (error) {
        setErr(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stories, isLoading, err };
};

export default useStories;
