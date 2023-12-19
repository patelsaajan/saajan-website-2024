import getDiaryMetadata from "../../../components/metadataFunctions/getDiaryMetadata";
import getMarkdownContent from "../../../components/metadataFunctions/getMarkdownContent";
import { Box, Container, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import React from "react";

interface pagePromps {
  params: { diaryPost: string };
}

export const generateStaticParams = async () => {
  const post = getDiaryMetadata();
  return post.map((post) => ({ slug: post.slug }));
};

const page = ({ params }: pagePromps) => {
  const slug = params.diaryPost;
  const post = getMarkdownContent(slug, "markdownFiles/diary/");
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{ display: "flex column", textAlign: "justify", marginY: "70px" }}
        >
          <Typography variant="h3">{post.data.title}</Typography>
          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            {post.data.date}
          </Typography>
          <Markdown>{post.content}</Markdown>
        </Box>
      </Container>
    </>
  );
};

export default page;
