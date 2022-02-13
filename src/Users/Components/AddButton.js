import React, { useState } from "react";
import { Box, Button, TextareaAutosize, Modal } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddButton = (props) => {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [postData, setPostData] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    let data = document.getElementById("textfield").value;

    let post = {
      content: data,
      post_id: uuidv4(),
    };

    postData.push(post);
    const token = localStorage.getItem("token");
    localStorage.setItem(`${token}-posts`, JSON.stringify(postData));
    props.sendData(postData);
  };

  const handleLogin = () => {
    alert("please login to proceed");
  };

  return (
    <div>
      <Button onClick={token ? handleOpen : handleLogin} variant="outlined">
        Add Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextareaAutosize
            aria-label="minimum height"
            id="textfield"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 400 }}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddButton;
