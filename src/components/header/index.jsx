import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../images/logo.png";
import UserPic from "../../images/Userpic.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 767) {
      setIsMobile(true);
    }
    console.log(windowWidth);
  }, []);
  if (isMobile) {
    return (
      <div className="navigation-bar">
        <div className="menu__open__icon">
          <a onClick={() => setIsMenuOpen(true)}>
            <GiHamburgerMenu />
          </a>
        </div>
        <div className="logo">
          <img src={Logo} width="100" />
        </div>
        <div className="account">
          <div className="user">
            <a href="#">
              <img src={UserPic} className="userimage" />
            </a>
            <div className="isonline"></div>
          </div>
        </div>
        <div className={`${isMenuOpen ? "open" : "close"} navigation-slide`}>
          <div className="menu__close__icon">
            <a onClick={() => setIsMenuOpen(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="menu">
            <nav>
              <a className="menu-item p-regular" href="#">
                Menu One
              </a>
              <a className="menu-item p-regular" href="#">
                Menu Two
              </a>
              <a className="menu-item p-regular" href="#">
                Menu Three
              </a>
              <a className="menu-item p-regular" href="#">
                Menu Four
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <nav>
            <a className="menu-item p-regular" href="#">
              Menu One
            </a>
            <a className="menu-item p-regular" href="#">
              Menu Two
            </a>
            <a className="menu-item p-regular" href="#">
              Menu Three
            </a>
            <a className="menu-item p-regular" href="#">
              Menu Four
            </a>
          </nav>
        </div>
        <div className="account">
          <div className="user">
            <img src={UserPic} className="userimage" />
            <div className="isonline"></div>
          </div>
          <select className="user-options">
            <option
              style={{ background: "white", color: "black" }}
              value="user"
              selected
            >
              User
            </option>
            <option
              value="account"
              style={{ background: "white", color: "black" }}
            >
              <a href="#">My Account</a>
            </option>
            <option
              value="User"
              style={{ background: "white", color: "black" }}
            >
              <a href="#">Logout</a>
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
