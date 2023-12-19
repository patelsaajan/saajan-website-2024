"use client";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={"xs"}
      sx={{
        mt: "50px",
        mb: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/saajan-s-patel/");
          }}
        >
          <LinkedInIcon sx={{ color: "text.secondary" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://github.com/patelsaajan");
          }}
        >
          <GitHubIcon sx={{ color: "text.secondary" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://github.com/patelsaajan");
          }}
        >
          <TwitterIcon sx={{ color: "text.secondary" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.instagram.com/_spatel/");
          }}
        >
          <InstagramIcon sx={{ color: "text.secondary" }}></InstagramIcon>
        </IconButton>
      </Box>

      <Typography sx={{ textAlign: "center", mt: "10px" }}>
        Copyright ©2023 All rights reserved{" "}
      </Typography>
    </Container>
  );
};

export default Footer;
