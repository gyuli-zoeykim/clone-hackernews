export const handlePrevPage = (setCurrentPage) => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  window.scrollTo(0, 0);
};

export const handleNextPage = (setCurrentPage) => {
  setCurrentPage((prevPage) => prevPage + 1);
  window.scrollTo(0, 0);
};
