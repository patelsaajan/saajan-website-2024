"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

type cardPrompts = {
  title: string;
  date: string;
  tags: string;
  body: string;
  blogSlug: string;
  folder: string;
};

const TextOnlyCards = ({
  title,
  date,
  tags,
  body,
  blogSlug,
  folder,
}: cardPrompts) => {
  const options: { dateStyle: "long" } = { dateStyle: "long" };
  const theme = useTheme();
  let hover = false;
  return (
    <>
      <Link href={`/${folder}/${blogSlug}`}>
        <Box
          sx={{
            display: "flex column",
            width: "100%",
            gap: "10px",
            mb: "40px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"550"}
            sx={{
              "&:hover": {
                color: `${theme.palette.primary.main}`,
              },
            }}
          >
            {title}
          </Typography>
          <Box display={"flex"} gap={"10px"}>
            <Typography>
              {new Intl.DateTimeFormat("en-uk", options).format(new Date(date))}
            </Typography>{" "}
            | <Typography sx={{ color: "#8695A4" }}>{tags}</Typography>
          </Box>
          <Typography sx={{ textAlign: "justify" }}>{body}</Typography>
          <Divider sx={{ mt: "20px", Size: "10px" }} />
        </Box>
      </Link>
    </>
  );
};

export default TextOnlyCards;
