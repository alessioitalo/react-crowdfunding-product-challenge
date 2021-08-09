import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import desktopBackground from "../images/image-hero-desktop.jpg";
import mobileBackground from "../images/image-hero-mobile.jpg";
import hamburgerButton from "../images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";

const StyledHeader = styled.header`
  height: 35rem;
  background-image: url(${desktopBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  @media (max-width: 600px) {
    background-image: url(${mobileBackground});
    background-size: contain;
  }

  & nav {
    padding: 2rem 1rem;
    ${"" /* padding: 2rem 10rem; */}
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }

  & nav li {
    cursor: pointer;
    list-style: none;
    display: inline-block;
    color: white;
    margin: 0 1rem;
    @media (max-width: 600px) {
      display: none;
    }
    }

    & nav li:hover{
      transform: scale(1.1);
      }
    }  

    & a {
      text-decoration: none;
    }
  }
  & nav > img {
    height: 2rem;
    @media (max-width: 600px) {
      height: 1.4rem;
    }
  }

  & img:last-child {
    cursor: pointer;
    display: none;
    @media (max-width: 600px) {
      display: inline;
    }

  }
`;

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(null);

  const mobileMenuHandler = () => {
    if (!showMobileMenu) {
      setShowMobileMenu(true);
      setHideHamburger(true);
      props.setShowModal(true);
      return;
    }
    setShowMobileMenu(false);
    setHideHamburger(false);
    props.setShowModal(false);
  };

  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <a href="/">
            <li className='navbar-link' >About</li>
          </a>
          <a href="/">
            <li>Discover</li>
          </a>
          <a href="/">
            <li>Get Started</li>
          </a>
        </ul>
        {!hideHamburger && (
          <img
            onClick={mobileMenuHandler}
            src={hamburgerButton}
            alt="hamburger-btn"
          />
        )}
      </nav>
      {showMobileMenu && <MobileMenu mobileMenuHandler={mobileMenuHandler} />}
    </StyledHeader>
  );
}

export default Header;
