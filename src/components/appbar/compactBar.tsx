import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";

type prompts = {
  pages: typeArray[];
};

type typeArray = {
  goTo: string;
  name: string;
};

const CompactBar = ({ pages }: prompts) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="lg">
      <IconButton onClick={handleOpenNavMenu}>
        <MenuIcon fontSize="large" sx={{ color: "black" }} />
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
        {pages.map((page) => (
          <Link href={page.goTo}>
            <MenuItem key={page.goTo} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                {page.name.toUpperCase()}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Container>
  );
};

export default CompactBar;
