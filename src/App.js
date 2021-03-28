import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/navbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    font-family: Pacifico, sans-serif;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar/>
    </React.Fragment>
  );
}

export default App;
