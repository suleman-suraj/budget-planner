import React, {useContext} from "react";
import { Nav, Container, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiPower, FiUser } from "react-icons/fi";
import { UsersContext } from "../context/UsersContext";

const Header = () => {
  const { logout, userInfo } = useContext(UsersContext);

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-dark navbar-expand">
      <Container>
        <Navbar.Brand className="bg-dark text-white">
          BUDGET PLANNER APP
        </Navbar.Brand>
        <Nav>
          {userInfo ? (
            <>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
                <NavDropdown.Item>{userInfo.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/logout"
                    className="nav-link bg-success text-white"
                    onClick={handlelogout}
                  >
                    <FiPower size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Nav.Item>
                <Link to="/home" className="bg-dark text-white nav-link">
                  HOME
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login" className="bg-dark text-white nav-link">
                  LOG IN
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register" className="bg-dark text-white nav-link">
                  SIGN UP
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
