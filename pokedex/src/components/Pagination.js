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
          style={{ opacity: "0.6" }}
          className="prevButton"
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
          style={{ opacity: "0.6" }}
          className="nextButton"
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
