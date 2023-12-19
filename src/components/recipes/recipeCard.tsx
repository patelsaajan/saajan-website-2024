"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardPrompts = {
  name: string;
  imageString: string;
  desc: string;
  recipeLink: string;
  date: string;
};

const RecipeCard = ({
  name,
  imageString,
  desc,
  recipeLink,
  date,
}: cardPrompts) => {
  const theme = useTheme();
  return (
    <Link href={`/recipes/${recipeLink}`}>
      <Box
        sx={{
          display: "flex column",
          border: "3px solid black",
          boxShadow: 1,
          width: "280px",
          justifyContent: "center",
          px: "10px",
          paddingTop: "40px",
          m: "20px",
          transition: "200ms all ease-in",
          borderRadius: "16px",
          minHeight: "350px",
          "&:hover": {
            border: `3px solid ${theme.palette.primary.main}`,
            cursor: "pointer",
          },
        }}
      >
        <Image
          src={imageString}
          width={200}
          height={200}
          alt="test image of food"
          style={{ borderRadius: "16px" }}
        />
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mt: "5px" }}>
          {date}
        </Typography>
        {/* <Typography variant="body2" sx={{ textAlign: "justify", mt: "5px" }}>
          {desc}
        </Typography> */}
      </Box>
    </Link>
  );
};

export default RecipeCard;
