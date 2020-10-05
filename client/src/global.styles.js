import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 1.25rem 3.75rem;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
