import React from 'react';

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      <button onClick={goToPrevPage}>Previous Page</button>
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}
