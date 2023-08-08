export async function fetchIdsByCategory(category) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/${category}stories.json?print=pretty`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top ids:', error);
    return [];
  }
}

export async function fetchStories(id) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}
