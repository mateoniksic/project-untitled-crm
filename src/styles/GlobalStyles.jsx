import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  &, &.light-mode {
  --sage-1: hsl(155, 30.0%, 98.8%);
  --sage-2: hsl(150, 14.3%, 97.3%);
  --sage-3: hsl(150, 8.0%, 94.5%);
  --sage-4: hsl(150, 6.0%, 92.0%);
  --sage-5: hsl(150, 4.9%, 89.5%);
  --sage-6: hsl(150, 4.3%, 86.7%);
  --sage-7: hsl(150, 3.7%, 82.8%);
  --sage-8: hsl(150, 2.9%, 72.9%);
  --sage-9: hsl(155, 3.5%, 54.2%);
  --sage-10: hsl(158, 2.9%, 49.3%);
  --sage-11: hsl(155, 3.0%, 38.5%);
  --sage-12: hsl(155, 12.0%, 11.5%);

  --mint-1: hsl(165, 80.0%, 98.8%);
  --mint-2: hsl(164, 88.2%, 96.7%);
  --mint-3: hsl(164, 80.4%, 92.6%);
  --mint-4: hsl(165, 71.6%, 88.4%);
  --mint-5: hsl(165, 61.0%, 83.4%);
  --mint-6: hsl(166, 50.2%, 76.7%);
  --mint-7: hsl(166, 43.3%, 67.2%);
  --mint-8: hsl(168, 45.0%, 52.9%);
  --mint-9: hsl(167, 70.0%, 72.0%);
  --mint-10: hsl(167, 62.0%, 69.0%);
  --mint-11: hsl(172, 50.0%, 30.5%);
  --mint-12: hsl(171, 50.0%, 17.5%);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
    --sage-1: hsl(155, 7.0%, 9.2%);
    --sage-2: hsl(150, 7.7%, 10.2%);
    --sage-3: hsl(151, 5.5%, 15.2%);
    --sage-4: hsl(152, 4.7%, 18.3%);
    --sage-5: hsl(153, 4.2%, 21.1%);
    --sage-6: hsl(153, 3.7%, 24.2%);
    --sage-7: hsl(154, 3.3%, 28.7%);
    --sage-8: hsl(156, 2.6%, 37.1%);
    --sage-9: hsl(155, 6.0%, 41.5%);
    --sage-10: hsl(157, 4.6%, 49.2%);
    --sage-11: hsl(155, 5.0%, 68.3%);
    --sage-12: hsl(155, 7.0%, 93.0%);

    --mint-1: hsla(120, 100%, 43.9%, 0.005);
    --mint-2: hsla(165, 100%, 49.0%, 0.031);
    --mint-3: hsla(174, 100%, 49.8%, 0.074);
    --mint-4: hsla(172, 100%, 49.8%, 0.113);
    --mint-5: hsla(172, 100%, 49.9%, 0.152);
    --mint-6: hsla(173, 100%, 50.0%, 0.208);
    --mint-7: hsla(173, 99.8%, 54.7%, 0.312);
    --mint-8: hsla(170, 99.6%, 59.2%, 0.516);
    --mint-9: hsla(167, 99.6%, 78.4%, 0.910);
    --mint-10: hsla(163, 99.5%, 80.5%, 0.949);
    --mint-11: hsla(167, 99.8%, 65.8%, 0.862);
    --mint-12: hsla(156, 99.7%, 89.9%, 0.957);

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  --bg-light: #ffffff;
  --bg-normal: var(--sage-1);
  --bg-subtle: var(--sage-2);
  --bg-solid-normal: var(--mint-9);
  --bg-solid-hovered: var(--mint-10);

  --border-non-interactive: var(--sage-6);
  --border-interactive: var(--sage-6);
  --border-interactive-focus: var(--sage-6);

  --component-normal: var(--mint-3);
  --component-hovered: var(--mint-4);
  --component-selected: var(--mint-5);

  --text-lc: var(--mint-11);
  --text-hc: var(--mint-12);

  --border-radius-sm: .8rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  color: var(--text-hc);
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  min-height: 100vh;
  transition: color 0.3s, background-color 0.3s;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--border-non-interactive);
  color: var(--text-lc);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--component-selected);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
