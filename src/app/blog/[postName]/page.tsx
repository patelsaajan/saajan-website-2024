import getBlogMetadata from "../../../components/metadataFunctions/getBlogMetadata";
import getMarkdownContent from "../../../components/metadataFunctions/getMarkdownContent";
import { Box, Container, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import React from "react";

interface pagePromps {
  params: { postName: string };
}

export const generateStaticParams = async () => {
  const post = getBlogMetadata();
  return post.map((post) => ({ slug: post.slug }));
};

const page = ({ params }: pagePromps) => {
  const slug = params.postName;
  const post = getMarkdownContent(slug, "markdownFiles/blog/");
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{ display: "flex column", textAlign: "justify", marginY: "70px" }}
        >
          <Typography variant="h3">{post.data.title}</Typography>
          <Typography variant="body2" sx={{ marginTop: "15px" }}>
            {post.data.date}
          </Typography>
          <Markdown>{post.content}</Markdown>
        </Box>
      </Container>
    </>
  );
};

export default page;
