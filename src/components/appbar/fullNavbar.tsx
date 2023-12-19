import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

type prompts = {
  pages: typeArray[];
};

type typeArray = {
  goTo: string;
  name: string;
};

const FullNavbar = ({ pages }: prompts) => {
  return (
    <Container maxWidth="sm">
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {pages.map((page, i) => (
            <Button
              disableRipple
              key={i}
              sx={{
                color: "black",
                fontSize: "Large",
                paddingRight: "20px",
                fontWeight: "550",

                transition: "auto 200ms ease-in",
                "&:hover": {
                  textDecoration: "1.5px underline wavy black",
                  backgroundColor: "transparent",
                },
              }}
            >
              <Link href={page.goTo}>{page.name} </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default FullNavbar;
