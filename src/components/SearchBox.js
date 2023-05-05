import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="">
      <input
        className="rounded-md border border-solid border-slate-900 p-2"
        type="text"
        placeholder="Search for robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
