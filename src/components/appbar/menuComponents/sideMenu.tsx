import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = ["Home", "Projects", "Blog", "Recipes"];

const menuVariant = {
  hidden: { opacity: 1, x: "-100vw" },
  show: {
    opacity: 1,
    x: 0,
    transition: { style: "tween", duration: 0.75 },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
};

interface menuProps {
  state: boolean;
  setState: (currentState: boolean) => void;
  pages: typeArray[];
}

type typeArray = {
  goTo: string;
  name: string;
};

const SideMenu = ({ state, setState, pages }: menuProps) => {
  return (
    <>
      <motion.div
        className="flex flex-col px-10 bg-white h-full w-full z-10 absolute top-0  "
        key={"sideMenu"}
        variants={menuVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.button
          className="flex absolute top-20 right-10"
          onClick={() => {
            setState(!state);
          }}
        >
          Close
        </motion.button>
        <div className="mt-40"></div>
        {pages.map((item) => (
          <Link
            href={item.goTo}
            onClick={() => {
              setState(false);
            }}
          >
            <button key={item.name} className="my-3 text-4xl text-left">
              {item.name.toUpperCase()}
            </button>
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default SideMenu;
