import React from "react";

function Pagination({ offSet, setOffSet, page, setPage }) {
  const nextPage = () => {
    setOffSet(offSet + 20);
    setPage(page + 1);
  };

  const prevPage = () => {
    setOffSet(offSet - 20);
  };

  return (
    <div className="paginationContainer">
      {offSet === 0 ? (
        <button
          disabled={true}
          className="prevButton"
          onClick={() => prevPage()}
        >
          Prev
        </button>
      ) : (
        <button
          disabled={false}
          className="prevButton"
          onClick={() => prevPage()}
        >
          Prev
        </button>
      )}
      {page === 57 ? (
        <button
          disabled={true}
          className="nextButton"
          onClick={() => nextPage()}
        >
          Next
        </button>
      ) : (
        <button className="nextButton" onClick={() => nextPage()}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
