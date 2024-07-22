import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "../../components/topNavBar/NavItem";



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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
