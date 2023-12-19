import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getBlogMetadata from "../../components/metadataFunctions/getBlogMetadata";
import TextOnlyCards from "../../components/textOnlyCards";

const blogMetadata = getBlogMetadata();

const postPreviews = blogMetadata.map((post) => (
  <TextOnlyCards key={post.slug} {...post} blogSlug={post.slug} folder="blog" />
));

export default function blog() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column", textAlign: "center" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="40px">
          Blog
        </Typography>
      </Box>
      {postPreviews}
    </Container>
  );
}
