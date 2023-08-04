export async function fetchTopIds() {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top ids:', error);
    return [];
  }
}

export async function fetchNewIds() {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching new ids:', error);
    return [];
  }
}

export async function fetchBestIds() {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching best ids:', error);
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

export async function fetchComments(kidsId) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${kidsId}.json?print=pretty`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}
