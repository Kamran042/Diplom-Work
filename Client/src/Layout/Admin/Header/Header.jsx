import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('adminIsLogged');
    sessionStorage.removeItem('superAdminIsLogged');
    navigate('/admin');
  };

  const handleLogoutLink = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('adminIsLogged');
    sessionStorage.removeItem('superAdminIsLogged');
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", marginBottom: 100 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Button color="inherit">
                  <Link to={""}>login</Link>
                </Button>
                <Button color="inherit">
                  <Link to={"/admin/add-product"}>add product</Link>
                </Button>
                <Button color="inherit">
                  <Link to={"/admin/dashboard"}>dashboard</Link>
                </Button>
                <Button color="inherit">
                  <Link to={"/admin/sliders"}>sliders</Link>
                </Button>
                <Button color="inherit">
                  <Link to={"/admin/products"}>products</Link>
                </Button>
                <Button color="inherit">
                  <Link to={"/admin/users"}>users</Link>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">
              <Link to={""}>login</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/admin/add-product"}>add product</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/admin/products"}>products</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/admin/sliders"}>sliders</Link>
            </Button>
           
            <Button color="inherit">
              <Link to={"/admin/users"}>users</Link>
            </Button>
          </Box>

          <Box>
            <Button color="inherit" onClick={handleLogoutLink}>
                <Link to={"/"}>go website</Link>
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="ADMIN"
                  src="https://ih1.redbubble.net/image.2955130987.9629/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "#ffffff00",
                    color: "black",
                    border: "none",
                  }}
                >
                  Sign out
                </button>
              </MenuItem>
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </AppBar>
  );
}

export default Header;
