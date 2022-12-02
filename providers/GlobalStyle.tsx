import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #00447c;
    margin: 0;
    padding: 40px;
    font-family: Calibri;
    color: #fff;
  }

  .main-container {
    display: flex;
  }

  .main-content {
    width: 50%;
    text-align: center;

  }

  .main-image {
    width: 50%;
    text-align: center;
    margin: 0 20px;
  }

  .main-image img {
    width: 600px;
  }

  h1 {
    font-size: 64px;
    margin: 0;
  }

  h2 {
    font-size: 18px;
    margin-top: 50px;
  }

  textarea {
    width: 400px;
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    color: #111;
    font-family: Calibri;
    font-size: 16px;
  }

  button {
    margin-top: 10px;
    padding: 5px 20px;
    background-color: #fff;
    border: none;
    outline: none;
    color: #444;
    font-family: Calibri;
    cursor: pointer;
    font-size: 20px;
  }

  .output {
    margin-top: 50px;
    font-size: 18px;
  }
`
