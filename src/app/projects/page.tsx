import BriefProjectCards from "../../components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getPostMetadata from "../../components/metadataFunctions/getPostMetadata";

const postMetadata = getPostMetadata("markdownFiles/projects/");

export default function projects() {
  const postMetadataObject = postMetadata;
  postMetadataObject.sort((objA, objB) => {
    return objA.order - objB.order;
  });
  const postPreviews = postMetadataObject.map((post) => (
    <BriefProjectCards key={post.slug} {...post} projectURL={post.slug} />
  ));
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "40px" }}>
        <Box sx={{ display: "flex column", textAlign: "center" }}>
          <Typography sx={{}} variant={"h4"} fontWeight={"800"} mb="40px">
            Projects
          </Typography>
          {postPreviews}
        </Box>
      </Container>
    </>
  );
}
