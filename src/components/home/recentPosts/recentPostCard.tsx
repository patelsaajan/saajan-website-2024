"useClient";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

type cardProps = {
  title: string;
  date: string;
  tags: string;
  body: string;
};

const RecentPostCard = ({ title, date, tags, body }: cardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const cardMargin = "20px";
  const options: { dateStyle: "long" } = { dateStyle: "long" };
  return (
    <Box
      sx={{
        display: "flex column",
        p: "30px",
        width: "370px",
        height: "250px",
        mx: { xs: "auto", md: 0 },
        backgroundColor: "#ffff",
        boxShadow: "8",
        mb: { xs: "20px", md: "0px" },
        transition: "all 200ms ease-in",
        borderRadius: "8px",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "12",
        },
      }}
    >
      <Typography variant="h6" fontWeight={"800"}>
        {title}
      </Typography>
      <Typography mt={cardMargin} variant="body2" color={"#21243D"}>
        {new Intl.DateTimeFormat("en-uk", options).format(new Date(date))} |{" "}
        {tags}
      </Typography>
      <Typography mt={cardMargin} variant="body2" color={"#21243D"}>
        {body}
      </Typography>
    </Box>
  );
};

export default RecentPostCard;
