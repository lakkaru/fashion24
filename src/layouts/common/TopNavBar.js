import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "../../components/topNavBar/NavItem";
import { Box, Typography } from "@mui/material";

const navLinks = [
  {
    title: "All Items",
  },
  {
    title: "Dresses",
  },
  {
    title: "Seasonal",
  },
  {
    title: "Denims",
  },
  {
    title: "Tshirts",
  },
  {
    title: "Tops",
  },
];

function TopNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontWeight: "700",
              fontSize: "32px",
              color: "rgb(251, 209, 3)",
            }}
          >
            lak<span style={{ color: "#004743" }}>Fashion</span>
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-md-0 mx-auto order-1"
        >
          <Nav className="me-auto">
            {navLinks.map((val, key) => {
              return (
                <Box sx={{ textAlign: "center" }}>
                  <NavItem key={key} title={val.title} />{" "}
                </Box>
              );
            })}
          </Nav>
          <Nav>
            <Box sx={{ textAlign: "center" }}>
              <NavItem icon={"ShoppingCartIcon"} />
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
