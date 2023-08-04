const timeDifference = (timestamp) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const difference = currentTime - timestamp;

  if (difference < 60) {
    return 'just now';
  } else if (difference < 3600) {
    const minutes = Math.floor(difference / 60);
    return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
  } else if (difference < 86400) {
    const hours = Math.floor(difference / 3600);
    return `${hours} hr${hours > 1 ? 's' : ''} ago`;
  } else if (difference < 2592000) {
    const days = Math.floor(difference / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (difference < 31536000) {
    const months = Math.floor(difference / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(difference / 31536000);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

export default timeDifference;
