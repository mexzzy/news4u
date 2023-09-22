import React from "react";
import { SearchWrapper } from "./Style";

function Search() {
  return (
    <div>
      <SearchWrapper>
        <input type="text" placeholder="Search for headlines" />
        <button>search</button>
      </SearchWrapper>
    </div>
  );
}

export default Search;
