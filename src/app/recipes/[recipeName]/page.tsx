import RecipeHero from "../../../components/recipes/recipeHero";
import getMarkdownContent from "../../../components/metadataFunctions/getMarkdownContent";
import getRecipeMetadata from "../../../components/metadataFunctions/getRecipeMetadata";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Markdown from "markdown-to-jsx";
import React from "react";

interface pagePromps {
  params: { recipeName: string };
}

export const generateStaticParams = async () => {
  const recipes = getRecipeMetadata();
  return recipes.map((recipe) => ({ slug: recipe.slug }));
};

const page = ({ params }: pagePromps) => {
  const slug = params.recipeName;
  const recipe = getMarkdownContent(slug, "markdownFiles/recipes/");
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex column",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ paddingTop: "50px" }}>
          {recipe.data.name}
        </Typography>
        <Typography sx={{ paddingY: "30px" }}>{recipe.data.date}</Typography>
        <RecipeHero
          imageString={recipe.data.imageString}
          ingredientsArray={recipe.data.ingredients}
          story={recipe.data.story}
          optioanlArray={recipe.data.optional}
        />

        <Markdown>{recipe.content}</Markdown>
      </Box>
    </Container>
  );
};

export default page;
