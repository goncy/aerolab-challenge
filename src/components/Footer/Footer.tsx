import React from "react";

import Logo from "../../assets/logo.svg";

import {FooterWrapper, Code} from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <img alt={"Aerolab"} src={Logo} />
      <Code>
        Developed by{" "}
        <a href={"https://github.com/sshuyn"} rel={"noreferrer"} target={"_blank"}>
          @sshuyn
        </a>
      </Code>
    </FooterWrapper>
  );
};

export default Footer;
