import React, { useState } from "react";
import EditPostButton from "./editPostButton";
import DeletePostButton from "./deletePostButton";
import { Modal, Box, TextareaAutosize, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Css/Content.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

const PostContent = (props) => {
  const [open, setOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState();
  const [selectedValue, setSelectedValue] = useState();

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

    valueFilter.push(post);
    const token = localStorage.getItem("token");
    localStorage.setItem(`${token}-posts`, JSON.stringify(valueFilter));
    props.sendData(valueFilter);
  };

  const onEdit = (post_id, index) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login to proceed");
    } else {
      let filterValue = props.postData.filter(
        (value) => value.post_id !== post_id
      );
      setValueFilter(filterValue);
      setSelectedValue(props.postData[index].content);
      handleOpen();
    }
  };

  const onDelete = (post_id, index) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login to proceed");
    } else {
      let filterValue = props.postData.filter(
        (value) => value.post_id !== post_id
      );
      props.sendData(filterValue);
    }
  };

  return (
    <div className="content">
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableBody>
              {props.postData.map((post, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">
                      {post.content}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <EditPostButton
                        onEdit={onEdit}
                        post_id={post.post_id}
                        index={index}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <DeletePostButton
                        onDelete={onDelete}
                        post_id={post.post_id}
                        index={index}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

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
              defaultValue={selectedValue}
            />
            <Button onClick={handleSubmit}>Submit</Button>
            {/* <TextField></TextField> */}
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </Modal>
      </>
    </div>
  );
};

export default PostContent;
