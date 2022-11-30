import styled from 'styled-components';
import React from "react";
import DebugLogs from "../DebugLogs";

const FooterContainer = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 50px;
`
const Footer = () => {
  return <FooterContainer>
    <DebugLogs></DebugLogs>
  </FooterContainer>
}

export default Footer
