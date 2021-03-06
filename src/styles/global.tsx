import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {

  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  border: 0;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Montserrat', sans-serif;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

h1 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.65rem;
  line-height: 5rem;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}

h2 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 1.75rem;
  text-align: center;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

h3 {
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 1.3125rem;
  color: #FFFFFF;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 1.5rem;
}

h4 {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #FFFFFF;
  letter-spacing: 0.03rem;
  text-align: center;
  line-height: 1.5rem;
  font-style: italic;
}

h5 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 2.5rem;
  color: #FFFFFF;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
  padding: 64px 0;
}

h6 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 1.5rem;
  color: #FFFFFF;
  letter-spacing: 0.04rem;
}

p {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #FFFFFF;
  letter-spacing: 0.03625rem;
  line-height: 1.5rem;
}

`;
