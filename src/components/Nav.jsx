/* eslint-disable react/prop-types */
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Nav({ toggleDrawer, setToggleDrawer }) {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setToggleDrawer(!toggleDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gemini Blue Metal
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Nav;
