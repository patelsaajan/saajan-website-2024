import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getDiaryMetadata from "../../components/metadataFunctions/getDiaryMetadata";
import TextOnlyCards from "../../components/textOnlyCards";

const diaryMetadata = getDiaryMetadata();

diaryMetadata.sort((objA, objB) => {
  let dateA = new Date(objA.date);
  let dateB = new Date(objB.date);
  return dateA > dateB ? -1 : 1;
});

const postPreviews = diaryMetadata.map((post) => (
  <TextOnlyCards
    key={post.slug}
    {...post}
    blogSlug={post.slug}
    folder="diary"
  />
));

export default function blog() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column", textAlign: "center" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="40px">
          Diary of an "indian" kid
        </Typography>
      </Box>
      {postPreviews}
    </Container>
  );
}
