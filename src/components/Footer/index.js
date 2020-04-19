import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import { Container, Icons } from "./styles";

function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="http://github.com/alissonandrade2020"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size="20px" />
        </a>
        <span></span>
        <a
          href="http://instagram.com/alissonandradercc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram size="20px" />
        </a>
        <span></span>
        <a
          href="https://www.facebook.com/alisson.andrade.7906932"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook size="20px" />
        </a>
      </Icons>

      <p>
        Copyright © 2020 [{" "}
        <a
          href="http://alissondeandradearaujo.000webhostapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Alisson de Andrade Araújo
        </a>{" "}
        ] — Todos os direitos reservados
      </p>
    </Container>
  );
}

export { Footer };
