import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
    btnType?: 'danger' | 'basic'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  &:hover {
    background-color: #343401;
  }

  &:last-child {
    color: #d999ec;
  }

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fcf87c'};
    color: ${props => props.color || '#f15083'};
    background-color: transparent;

    &:hover {
      background-color: #c0c003;
    }
  `} //outlined

          //primary
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#fcf87c'};
    color: #cd59ef;

    &:hover {
      border: 2px solid ${props => props.color || '#fcf87c'};
      background-color: transparent;
    }
  `}
  ${props => props.btnType === 'danger' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#red'};
    color: aqua;

    &:hover {
      border: 2px solid ${props => props.color || 'black'};
      background-color: rgba(246, 0, 0, 0.99);
    }
  `}
  ${props => props.btnType === 'basic' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || 'F60000FC'};
    color: aqua;

    &:hover {
      border: 2px solid ${props => props.color || 'black'};
      background-color: chartreuse;
      box-shadow: 5px 5px 5px chartreuse;
    }
  `}
`


export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #c949ef;
  color: black;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }


`
