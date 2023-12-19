import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getRecipeMetadata from "../../components/metadataFunctions/getRecipeMetadata";
import RecipeCard from "../../components/recipes/recipeCard";

const recipeMetadata = getRecipeMetadata();

export default function blog() {
  recipeMetadata.sort((objA, objB) => {
    let dateA = new Date(objA.date);
    let dateB = new Date(objB.date);
    return dateA > dateB ? -1 : 1;
  });
  const recipePreview = recipeMetadata.map((recipe) => (
    <RecipeCard key={recipe.slug} recipeLink={recipe.slug} {...recipe} />
  ));
  return (
    <Container maxWidth="lg" sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Recipes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {recipePreview}
        </Box>
      </Box>
    </Container>
  );
}
