import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    font-family: Calibri;
    background-color: #111;
    color: #ddd;
  }

  .main-content {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  h1 {
    font-size: 64px;
    margin: 0;
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  textarea {
    margin-top: 50px;
    width: 400px;
    height: 100px;
    background-color: #333;
    border-radius: 5px;
    padding: 10px;
    color: #ddd;
  }

  button {
    margin-top: 10px;
    padding: 5px 20px;
    background-color: #444;
    border: none;
    outline: none;
    color: #ddd;
  }
`
