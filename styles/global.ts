import * as styled from "styled-components";

export default styled.createGlobalStyle`
  :root {
    --primary: #3751fe;
    --secondary: #0c31f1;
    --gray-200: #0000009c;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Mukta", sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .separator {
    margin: 2rem;
  }
`;
