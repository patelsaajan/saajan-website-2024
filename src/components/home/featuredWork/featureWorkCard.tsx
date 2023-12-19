"use client";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardPrompts = {
  title: string;
  date: string;
  tags: string[];
  body: string;
  imageSrc: string;
  projectURL: string;
};

const FeatureWorkCard = ({
  title,
  date,
  tags,
  body,
  imageSrc,
  projectURL,
}: cardPrompts) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Link href={"/projects/" + projectURL}>
      <Box
        sx={{
          display: " flex",
          p: "20px",
          gap: "20px",
          transition: "all 200ms ease-out",
          borderRadius: "16px",
          alignItems: "center",
          "&:hover": {
            // boxShadow: 3,
            cursor: "pointer",
          },
        }}
      >
        {isMobile ? (
          <></>
        ) : (
          <Image
            alt={"feature work image"}
            width={200}
            height={200}
            src={imageSrc}
            style={{ borderRadius: "8px" }}
          />
        )}
        <Box sx={{ display: "flex column" }}>
          <Typography variant="h5" fontWeight={"800"}>
            {title}
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              variant="body2"
              sx={{
                backgroundColor: "text.secondary",
                color: "#FFFF",
                px: "10px",
                pt: "1.5px",
                borderRadius: "16px",
                fontSize: "small",
                fontWeight: "800",
                width: "80px",
                my: "10px",
              }}
            >
              {date}
            </Typography>
            {tags.map((tag, i) => (
              <Typography
                key={i}
                sx={{
                  backgroundColor: "primary.main",
                  px: "10px",
                  pt: "1.5px",
                  color: "#FFFF",
                  textAlign: "center",
                  borderRadius: "16px",
                  fontSize: "small",
                  fontWeight: "800",
                  my: "10px",
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
          <Typography mt="5px" color="#21243D" sx={{ fontSize: "small" }}>
            {body}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default FeatureWorkCard;
