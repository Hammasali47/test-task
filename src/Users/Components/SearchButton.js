import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const SearchButton = () => {
  const history = useHistory();
  return (
    <div>
      <Button variant="outlined" onClick={() => history.push("/search")}>
        Search Post
      </Button>
    </div>
  );
};

export default SearchButton;
