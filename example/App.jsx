import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import BauReactCss from "../src/bau-reactcss";
import BauReactCss from "bau-reactcss";
import { Btn } from "./button";

const { css, styled, keyframes, createGlobalStyles } = BauReactCss();

const logoSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

createGlobalStyles`
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`;

const card = css`
  padding: 2em;
`;

const readTheDocs = css`
  color: #888;
`;

const logo = css`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const react = css`
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

const links = css`
  > a:nth-of-type(2) .${logo} {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Button = (props) => styled("button", props)`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

// const chevron = `
// &::marker {
//   content: ">>";
//   font-size: 1.2em;
// `;

// list-style-type: none;
const UL = (props) => styled("ul", props)`
  font-weight: bold;
  list-style-type: none;
  > li:nth-of-type(1) {
    background-color: bisque;
    color: green;
  }
`;

const chevronCl = css`
  > li:nth-of-type(2) {
    &::marker {
      content: ">>";
      font-size: 1.2em;
    }
  }
`;

const biskIt = css`
  color: bisque;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={links}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={logo + " " + react}
            alt="React logo"
          />
        </a>
      </div>
      <UL className={chevronCl}>
        <li>React</li>
        <li>Vite</li>
      </UL>
      <div className={card}>
        <Button
          className={biskIt}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
      <p>Conditional classes</p>
      <Btn onClick={() => alert("hi")}>Base style</Btn>
      <Btn danger="true" onClick={() => alert("danger")}>
        Danger click
      </Btn>
      <Btn disabled size={1.5}>
        Danger disabled
      </Btn>
    </>
  );
}

export default App;
