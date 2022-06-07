import React from "react";

function Search() {
  return (
    <form
      className="searchForm"
      // onSubmit={(event) => onFormSubmitAdd(event)}
    >
      <label>
        {" "}
        Search Your Pokemon
        <input
          id="pokemones"
          name="pokemones"
          type="text"
          // value={bookTitle}
          // onChange={(Event) => setBookTitle(Event.target.value)}
          className="inputSearch"
        />
      </label>
    </form>
  );
}

export default Search;
