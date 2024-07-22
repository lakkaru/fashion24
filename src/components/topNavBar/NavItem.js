import { Box } from "@mui/material";
import React from "react";
import { Nav } from "react-bootstrap";
import NavIcons from "./NavIcons";



export default function NavItem({ title , icon}) {
  return (
    <Box
      component={Nav.Link}
      sx={{
        color: "black",
        fontFamily:'ubuntu',
        "&:hover": {
          color: "rgb(255, 125, 29)",
        },
      }}
      href="#home"
    >
      {title && title}
      {icon && <NavIcons icon={'ShoppingCartIcon'}/>}
    </Box>
  );
}
