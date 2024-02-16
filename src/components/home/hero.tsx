"use client";

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const aboutMe = [
  " I'm originally from Cardiff and studied Electro-Mechanical Engineering at the University of Bristol. I take pride in holding a first-class master's degree in this field, with my guiding principles in life focusing on making the world a better place and assisting as many people as I can along the way.",
  "Currently, I'm on a learning journey, delving into TypeScript and React, all the while sharpening my Python skills. When I'm not deeply engrossed in coding, you can find me passionately supporting Liverpool. I've discovered a unique way to blend my enthusiasm for football with my keen interest in data by venturing into the realms of data engineering and visualisation.",
  "  Away from the tech world, I'm a passionate cook who thrives on experimenting with recipes and discovering delightful flavour combinations.",
];

const divContainer = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visable: {
    opacity: 1,
    y: 0,
    transition: {
      mass: 5.5,
      damping: 30,
      type: "spring",
    },
  },
};

const divChild = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },

  visable: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 2.5,
      delay: 0.5,
    },
  },
};

const HomeHero = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <motion.div variants={divContainer} initial="hidden" animate="visable">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            // border: "1px solid",
            textAlign: { xs: "center", lg: "left" },
            mt: "30px",
            gap: { xs: "30px", lg: "0px" },
          }}
        >
          <Image
            alt={"photo of myself"}
            width={400}
            height={400}
            src={"/imgs/heroPhoto.jpeg"}
            style={{
              borderRadius: "50%",
              border: `5px solid ${theme.palette.primary.main}`,
            }}
          />
          <div>
            <Typography variant="h3" mt="10px">
              Hi, I am Saajan,
            </Typography>
            <Typography variant="h4">
              Bristol Univeristy MEng Graduate
            </Typography>
          </div>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <motion.div variants={divChild}>
            <Box
              sx={{
                display: "flex column",
                textAlign: "justify",
              }}
            >
              {aboutMe.map((section, i) => (
                <Typography variant="body1" key={i} py={"5px"}>
                  {section}
                </Typography>
              ))}{" "}
            </Box>
            <Box sx={{ display: "flex column", textAlign: "center" }}>
              <Button
                href="https://1drv.ms/b/c/4273554a18c7efd7/EbzOqMLmvBVNkUud4kIb0aYBDfK152kyOpwNJqbHVYl7xg?e=S08vqp"
                sx={{
                  backgroundColor: "primary.main",
                  color: "#FFFF",
                  width: "120px",
                  height: "50",
                  mt: "30px",
                  fontWeight: "525",
                  borderRadius: "20px",
                  transition: "all 200ms ease-out",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    transform: "scale(1.1)",
                    borderRadius: "15px",
                    fontWeight: "600",
                  },
                }}
              >
                View CV
              </Button>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default HomeHero;
