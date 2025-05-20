import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Navbar from 'react-bootstrap/Navbar'

function NavBars() {
  return (
    
    <div className="stablenav" >
      {/* background color  */}
      <div className="homenavbar" >
        <span className="homepagespan">
          <a href="#" >
            <img src={logo} alt="" style={{ width: "30px",}} />
           nishan mobiles 
            <button
              style={{
                position: "absolute",
                right: "3px",
                // background color 
                color:"white",
                backgroundColor:"skyblue",
                height: "35px",
                width: "40px",
                marginTop: "2px",
                borderRadius: "10px",
                boxShadow: "2px 2px black",
                paddingLeft: "8px",
              }}
            >
              <FaCartShopping />
            </button>
            
            </a>
        </span>
      </div>

     {/* background Color */}
       
      <Nav  fill variant="tabs" defaultActiveKey="/" className="navbarr" >
        <Nav.Item>
          <Nav.Link as={Link} to={"/"}>
            home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/topproducts"}>
            top-products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>branded items</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/apple"}>
                apple
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/oneplus"}>
                oneplus
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/oppo"}>
                oppo
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/realme"}>
                realme
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/samsung"}>
                samsung
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/vivo"}>
                vivo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
       
      </Nav>
      </div>
    
  );
}

export default NavBars;
