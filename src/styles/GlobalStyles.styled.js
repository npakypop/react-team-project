import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
html {
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
};

body {
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.black};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p, 
  button {
    margin: 0;
    padding: 0;
  }

  a {
      text-decoration: none;
  }
`;