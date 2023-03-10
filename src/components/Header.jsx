import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const isActive = (target) => {
    const { pathname } = location;
    if (pathname === "/") return ["home"].includes(target);
    else return pathname.includes(target);
  };
  return (
    <Navbar bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/" className={isActive("Home") ? "active" : "link"}>
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={isActive("About") ? "active mx-3" : "link mx-3"}
          >
            About
          </NavLink>
          <NavLink
            to="/News"
            className={isActive("News") ? "active mx-3" : "link mx-3"}
          >
            News
          </NavLink>
          <NavLink to="/Hook" className={isActive("Hook") ? "active" : "link"}>
            Hook
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

// function Header() {
//   return (
//     <Navbar bg="secondary">
//       <Container>
//         <Navbar.Brand>Brand text</Navbar.Brand>
//       </Container>
//     </Navbar>
//   );
// }
export default Header;
