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
    <nav className="paginationContainer">
      {offSet === 0 ? (
        <button
          disabled={true}
          style={{ opacity: "0.6" }}
          className="navButton"
        >
          Prev
        </button>
      ) : (
        <button
          disabled={false}
          className="navButton"
          onClick={() => prevPage()}
        >
          Prev
        </button>
      )}
      {page === 57 ? (
        <button
          disabled={true}
          style={{ opacity: "0.6" }}
          className="navButton"
        >
          Next
        </button>
      ) : (
        <button className="navButton" onClick={() => nextPage()}>
          Next
        </button>
      )}
    </nav>
  );
}

export default Pagination;
