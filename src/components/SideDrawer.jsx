/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LuggageIcon from "@mui/icons-material/Luggage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate, useLocation } from "react-router-dom";

function SideDrawer({
  toggleDrawer,
  setToggleDrawer,
  drawerWidth,
  isBigScreen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const activeBarDesign = {
    backgroundColor: "primary.main",
    color: "white",
  };

  const DrawerItems = [
    { name: "Orders", icon: <LocalShippingIcon />, navlink: "/orders" },
    { name: "Delivery Sheet", icon: <ListAltIcon />, navlink: "/delivery" },
    { name: "Party Accounts", icon: <AccountBoxIcon />, navlink: "/party" },
    { name: "Frequent", icon: <LuggageIcon />, navlink: "/frequent" },
  ];
  return (
    <Drawer
      open={toggleDrawer}
      onClose={() => setToggleDrawer(false)}
      variant={isBigScreen ? "persistent" : "temporary"}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          width: drawerWidth,
        }}
      >
        <Typography variant="h5">Gemini</Typography>
        <IconButton color="inherit" onClick={() => setToggleDrawer(false)}>
          <NavigateBeforeIcon />
        </IconButton>
      </Box>
      <Divider></Divider>
      <List>
        {DrawerItems.map((item, index) => (
          <Box
            key={index}
            sx={location.pathname == item.navlink ? activeBarDesign : {}}
          >
            <ListItem disablePadding onClick={() => navigate(item.navlink)}>
              <ListItemButton>
                <ListItemIcon
                  sx={location.pathname == item.navlink ? activeBarDesign : {}}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

export default SideDrawer;
