import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import { Nav, Container, Logo, Menu, Social } from "./styles";

import logo from "../../assets/logo.png";

function Header() {
  return (
    <Nav>
      <Container>
        <Logo src={logo} />

        <Menu>
          <Social>
            <a
              href="http://github.com/alissonandrade2020"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size="18px" />
            </a>
            <a
              href="https://www.instagram.com/alissonandradercc"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size="18px" />
            </a>
            <a
              href="https://www.facebook.com/alisson.andrade.7906932"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook size="18px" />
            </a>
          </Social>
        </Menu>
      </Container>
    </Nav>
  );
}

export { Header };
