import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, IconButton } from "@mui/material";
import Link from "next/link";
import ShowModal from "./modal";
import { motion, AnimatePresence } from "framer-motion";
import SideMenu from "./sideMenu";

interface prompts {
  pages: typeArray[];
}

type typeArray = {
  goTo: string;
  name: string;
};

const FramerMenu = ({ pages }: prompts) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div>
      <ShowModal show={menuState} />
      <div className="pl-10">
        <IconButton
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <MenuIcon fontSize="large" sx={{ color: "black" }} />
        </IconButton>
      </div>
      <AnimatePresence>
        {menuState && <SideMenu state={menuState} setState={setMenuState} />}
      </AnimatePresence>
    </div>
  );
};

export default FramerMenu;
