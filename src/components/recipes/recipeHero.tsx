"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  imageString: string;
  ingredientsArray: string[];
  story: string[];
  optioanlArray: string[];
};

const RecipeHero = ({
  imageString,
  ingredientsArray,
  story,
  optioanlArray,
}: cardPrompts) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={imageString}
          width={largeScreen ? 450 : 300}
          height={largeScreen ? 450 : 300}
          alt="picture of food"
          style={{ borderRadius: "16px", border: "5px solid black" }}
        />
      </Box>
      <Box
        sx={{
          display: isMobile ? "flex column" : "flex",
          alignItems: "flex-start",
          marginY: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex column",
            minWidth: "200px",
            padding: "10px",
            marginX: "5px",
            marginY: "15px",
            borderRadius: "16px",
            border: `3px solid ${theme.palette.primary.dark}`,
            backgroundColor: "primary.main",
            color: "white",
          }}
        >
          <Typography variant="h6">Ingredients</Typography>
          {ingredientsArray.map((item: string, i: number) => (
            <Typography key={i} variant={"body2"} sx={{ marginTop: "10px" }}>
              {item}
            </Typography>
          ))}
          {optioanlArray.length === 0 ? (
            <></>
          ) : (
            <>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                Optional
              </Typography>
              {optioanlArray.map((item: string, i: number) => (
                <Typography
                  key={i}
                  variant={"body2"}
                  sx={{ marginTop: "10px" }}
                >
                  {item}
                </Typography>
              ))}
            </>
          )}
        </Box>
        <Box
          sx={{
            display: "flex column",
            padding: "10px",
            marginX: "5px",
            marginY: "15px",
            border: "1px solid black",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h6">Backstory</Typography>
          {story.map((item: string, i: number) => (
            <Typography
              key={i}
              variant="body2"
              sx={{ marginTop: "10px", textAlign: "justify" }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RecipeHero;
