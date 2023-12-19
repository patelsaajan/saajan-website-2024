import * as React from "react";
import AppBar from "@mui/material/AppBar";
import FullNavbar from "./fullNavbar";
import { useMediaQuery, useTheme } from "@mui/material";
import FramerMenu from "./framerMenu";

const pagesArray = [
  { name: "home", goTo: "/" },
  { name: "projects", goTo: "/projects" },
  { name: "blog", goTo: "/blog" },
  // { name: "diary", goTo: "/diary" },
  { name: "recipes", goTo: "/recipes" },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "0", mt: "20px" }}
    >
      {isMobile ? (
        <FramerMenu pages={pagesArray} />
      ) : (
        <FullNavbar pages={pagesArray} />
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
