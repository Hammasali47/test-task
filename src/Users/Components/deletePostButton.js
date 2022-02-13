import React from "react";
import { Button } from "@mui/material";

const deletePostButton = (props) => {
  return (
    <Button
      onClick={() => props.onDelete(props.post_id, props.index)}
      variant="contained"
    >
      Delete
    </Button>
  );
};

export default deletePostButton;
