import React from "react";
import { Button } from "@mui/material";

const editPostButton = (props) => {
  return (
    <Button
      onClick={() => props.onEdit(props.post_id, props.index)}
      variant="contained"
    >
      Edit
    </Button>
  );
};

export default editPostButton;
