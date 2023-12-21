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
      <div className="flex flex-col m-5 min-h-80 w-72 border-black border-solid border-2 rounded-2xl shadow-black ">
        {/* <div className="flex w-full pt-8 mb-4 justify-center"> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            pt: "28px",
            mb: "16px",
            justifyContent: "center",
          }}
        >
          <Image
            src={imageString}
            width={200}
            height={200}
            alt="test image of food"
            style={{ borderRadius: "16px" }}
          />
        </Box>
        {/* </div> */}
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mt: "5px" }}>
          {date}
        </Typography>
      </div>
    </Link>
  );
};

export default RecipeCard;
