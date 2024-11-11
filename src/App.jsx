/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "./components/Nav";
import Notify from "./components/Notify";
import { useState } from "react";
import SideDrawer from "./components/SideDrawer";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

function App() {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = 200;
  const [toggleDrawer, setToggleDrawer] = useState(isBigScreen);
  return (
    <div className="app">
      <SideDrawer
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        isBigScreen={isBigScreen}
        setToggleDrawer={setToggleDrawer}
      />
      <Box
        sx={{
          marginLeft:
            toggleDrawer && isBigScreen ? `${drawerWidth + 40}px` : "0px",
          transition: "margin 0.2s ease-in-out",
        }}
      >
        <Nav toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
        <Box component="main">
          <Outlet></Outlet>
        </Box>
      </Box>
      <Notify />
    </div>
  );
}

export default App;
