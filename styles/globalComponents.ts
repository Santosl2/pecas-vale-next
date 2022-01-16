import { darken } from "polished";
import styled from "styled-components";

interface IButtonProps {
  isRounded: boolean;
}

interface IProps {
  padding?: string;
  margin?: string;
  background?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

export const Container = styled.main``;

export const Flex = styled.div<IProps>`
  display: flex;
  height: ${(props) => (props.height ? props.height : "100%")};
`;

export const Box = styled.div<IProps>`
  flex: 1;
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--primary);
    font-weight: 700;
  }

  h4 {
    font-size: 30px;
  }

  h3 {
    font-size: 36px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #00000099;
  }
  b {
    margin-left: 5px;
  }
`;

export const Content = styled.div<IProps>`
  padding: ${(props) => props.padding};
`;

export const InputBox = styled.div<IProps>`
  margin: ${(props) => props.margin};
  width: 100%;
  min-height: 74px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: var(--gray-200);
  font-weight: 400;
  border: 1px solid #c1bbbb;
  padding: ${(props) => props.padding};
  transition: all 0.3s ease;

  &:focus-within {
    border-left: 5px solid var(--secondary);
  }

  input {
    border: none;
    background: none;
    outline: none;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const CheckboxArea = styled.div<IProps>`
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray-200);

  label {
    cursor: pointer;
  }

  p {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    appearance: none;
    border: 1px solid #e5e5e5;
    width: 13px;
    height: 13px;
    cursor: pointer;
    margin-right: 5px;

    &:checked {
      background: var(--secondary);
    }
  }
`;

export const Button = styled.button<IProps & IButtonProps>`
  height: ${(props) => (props.height ? props.height : "54px")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "150px")};
  margin-right: 1rem;
  border: none;
  color: white;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  background: var(--primary);
  transition: background 0.3s ease;
  cursor: pointer;
  font-weight: 700;

  ${(props) =>
    props.isRounded &&
    `
      color: var(--primary);
      background: none;
      border: 1px solid var(--primary);
      
     
  `};

  &:hover {
    background: ${darken(0.2, "#3751fe")};
    color: white;
  }
`;
