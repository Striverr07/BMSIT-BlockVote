import { React, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { signout } from "../../actions";
import { Button } from "../../styles";
import { useDispatch, useSelector } from "react-redux";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const auth = useSelector(state => state.auth);
const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const renderNonLoggedInUser = () => {
    return(
      <NavMenu onClick={handleClick} click={click}>

      <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/Login">
                    <Button primary>Login/Signup</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/Login">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Login/Signup
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              </NavMenu>
    )
  }

  const logout = () => {
    setClick(false);
    dispatch(signout());
  }

  const renderLoggedInlinks =() => {
    return (
      <NavMenu onClick={handleClick} click={click}>
        <NavItem>
        <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Button onClick={logout} primary>Signout</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink >
                    <Button onClick={logout} fontBig primary>
                      Signout
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              </NavMenu>
    )
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              BMSIT
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {auth.authenticate ? renderLoggedInlinks(): renderNonLoggedInUser()}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
