import styled from 'styled-components';
import React from "react";
import HeaderTitle from "./HeaderTitle";
import Link from "../link/Link";
import ThemeChanger from "../ThemeChanger";
import LocaleChanger from "../LocaleChanger";

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  margin-bottom: 50px;
`

const RightSide = styled.div`
  flex: 1 1 auto;
  text-align: right;
`

const Header = () => {
  return <HeaderContainer>
    <HeaderTitle>My Starter Application</HeaderTitle>
    <Link url="/about">About</Link>
    <RightSide>
      <LocaleChanger></LocaleChanger>
      <ThemeChanger></ThemeChanger>
    </RightSide>
  </HeaderContainer>
}

export default Header
