import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { useGlobalContext } from "../context/UserProvider";

const Layout: FC = () => {
  const { context, setContext } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (context === null) {
      navigate("/login");
    }
  });

  function logOut() {
    setContext(null);
    navigate("/login");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome {context}
            </Typography>
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Layout;
