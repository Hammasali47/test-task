import React, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
const Search = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const post = JSON.parse(localStorage.getItem(`${token}-posts`));

    setData(post);
  }, []);

  const handleSearch = () => {
    let searchData = document.getElementById("SearchValue").value;

    const Searched = data.filter((postData) => postData.content === searchData);
    setSearch(Searched);
  };

  return (
    <div>
      <Input placeholder="Placeholder" id="SearchValue" />
      <Button variant="contained" onClick={handleSearch}>
        Submit
      </Button>
      {search &&
        search.map((fetch) => {
          return <p>{fetch.content}</p>;
        })}
    </div>
  );
};

export default Search;
