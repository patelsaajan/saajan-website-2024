"use client";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import RecentPostCard from "./recentPostCard";
import postDataArray from "../../data/posts";
import Link from "next/link";

const RecentPosts = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", backgroundColor: "secondary.main" }}>
      <Container
        maxWidth="lg"
        sx={{
          p: "30px",
          marginTop: "80px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            fontSize={22}
            color={"#21243D"}
            sx={{
              transition: "all ease-in 200ms",
              "&:hover": {
                textDecoration: "1px wavy underline",
                cursor: "pointer",
              },
            }}
          >
            Recent Posts
          </Typography>
          <Link href={"/blog/"}>
            <Typography
              sx={{
                transition: "all ease-in 200ms",
                "&:hover": {
                  textDecoration: "1px wavy underline",
                  cursor: "pointer",
                },
              }}
            >
              View all
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "flex column", md: "flex" },
            flexWrap: { xs: "nowrap", md: "wrap" },
            gap: "20px",
            pt: "20px",
            justifyContent: "center",
          }}
        >
          {postDataArray.map((card, i) => (
            <RecentPostCard key={i} {...card} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default RecentPosts;
