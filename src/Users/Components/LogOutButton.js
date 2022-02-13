import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const LogOutButton = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };

  return (
    <div>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default LogOutButton;
