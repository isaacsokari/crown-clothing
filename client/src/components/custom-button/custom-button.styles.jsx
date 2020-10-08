import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonColor};
  border: 1px solid ${(props) => props.theme.colors.buttonColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackground};
    color: ${(props) => props.theme.colors.buttonHoverColor};
    border: 1px solid ${(props) => props.theme.colors.buttonHoverColor};
  }
`;

const invertedButtonStyles = css`
  background-color: ${(props) => props.theme.colors.buttonColor};
  color: ${(props) => props.theme.colors.buttonBackground};
  border: 1px solid ${(props) => props.theme.colors.buttonBackground};

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonColor};
    border: none;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSigninStyles;

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getButtonStyles}

  @media screen and (max-width: 800px) {
    min-width: unset;
    width: fit-content;
    padding: 0 1rem;
  }

  @media screen and (max-width: 300px) {
    margin-bottom: 1rem;
  }
`;
