import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "../../components/topNavBar/NavItem";
import { Typography } from "@mui/material";



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
        <Navbar.Brand href="#home"><Typography sx={{fontFamily:'ubuntu', fontWeight:'700', fontSize:'32px', color:'rgb(251, 209, 3)'}}>lak<span style={{color:'#004743'}}>Fashion</span></Typography></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((val, key) => {
              return (
                <NavItem key={key} title={val.title}/>
              );
            })}
          </Nav>
          <Nav>
          <NavItem icon={'ShoppingCartIcon'} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
