import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useLocalStorage from "../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

const Layout: FC =()=> {
  const [loginName, setLoginName] = useLocalStorage("account", "");
  const navigate = useNavigate()

    function logOut() {
        setLoginName("")
        navigate("/login")
    }

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome {loginName}
              </Typography>
              <Button color="inherit" onClick={logOut}>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
  );
}

export default Layout;