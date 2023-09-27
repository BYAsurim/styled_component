import React from 'react';
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {MenuStyled} from "./components/Menu.styled";
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import {Card} from "./ card/Card";


function App() {

    return (
        <>

            {/*<MenuStyled>*/}
            {/*    <ul>*/}
            {/*        <li><a href="">menu item 1</a></li>*/}
            {/*        <li><a href="">menu item 2</a></li>*/}
            {/*        <li><a href="">menu item 3</a></li>*/}
            {/*    </ul>*/}
            {/*</MenuStyled>*/}
            {/*<Box>*/}

            {/*    <StyledBtn as={'a'} href={'#'} fontSize={'30px'}>link</StyledBtn>*/}
            {/*    <StyledBtn as={Link} href={'#'}>link</StyledBtn>*/}
            {/*    <SuperButton>SuperButton</SuperButton>*/}
            {/*    <StyledBtn color={'red'}>hello</StyledBtn>*/}
            {/*    <StyledBtn primary  color={myTheme.colors.primary}>hello</StyledBtn>*/}
            {/*    <StyledBtn outlined = {true} color={myTheme.colors.secondary}>hello</StyledBtn>*/}
            {/*    <StyledBtn btnType = 'danger'>hello</StyledBtn>*/}
            {/*    <StyledBtn btnType = 'basic'>hello</StyledBtn>*/}
            {/*</Box>*/}
            <Card/>

        </>);
}


export default App;


const Box = styled.div`

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  //@media screen and (max-width: 800px) {
  //  flex-direction: column;
  //}
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`



