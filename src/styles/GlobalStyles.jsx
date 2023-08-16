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

  --tomato-1: hsl(10, 100%, 99.4%);
  --tomato-2: hsl(8, 100%, 98.4%);
  --tomato-3: hsl(8, 100%, 96.6%);
  --tomato-4: hsl(8, 100%, 94.3%);
  --tomato-5: hsl(8, 92.8%, 91.0%);
  --tomato-6: hsl(9, 84.7%, 86.3%);
  --tomato-7: hsl(10, 77.3%, 79.5%);
  --tomato-8: hsl(10, 71.6%, 71.0%);
  --tomato-9: hsl(10, 78.0%, 54.0%);
  --tomato-10: hsl(10, 71.4%, 49.4%);
  --tomato-11: hsl(10, 82.0%, 42.0%);
  --tomato-12: hsl(8, 50.0%, 24.0%);

  --indigo-1: hsl(225, 60.0%, 99.4%);
  --indigo-2: hsl(223, 100%, 98.6%);
  --indigo-3: hsl(223, 98.4%, 97.1%);
  --indigo-4: hsl(223, 92.9%, 95.0%);
  --indigo-5: hsl(224, 87.1%, 92.0%);
  --indigo-6: hsl(224, 81.9%, 87.8%);
  --indigo-7: hsl(225, 77.4%, 82.1%);
  --indigo-8: hsl(226, 75.4%, 74.5%);
  --indigo-9: hsl(226, 70.0%, 55.5%);
  --indigo-10: hsl(226, 58.6%, 51.3%);
  --indigo-11: hsl(226, 55.0%, 45.0%);
  --indigo-12: hsl(226, 50.0%, 24.0%);

  --backdrop-color: rgba(255, 255, 255, 0.1);
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

    --tomato-1: hsl(10, 23.0%, 9.4%);
    --tomato-2: hsl(10, 39.0%, 11.6%);
    --tomato-3: hsl(9, 48.3%, 15.5%);
    --tomato-4: hsl(9, 53.0%, 18.1%);
    --tomato-5: hsl(9, 57.0%, 20.7%);
    --tomato-6: hsl(9, 61.8%, 24.5%);
    --tomato-7: hsl(9, 68.4%, 31.1%);
    --tomato-8: hsl(10, 80.4%, 43.9%);
    --tomato-9: hsl(10, 78.0%, 54.0%);
    --tomato-10: hsl(10, 88.4%, 64.1%);
    --tomato-11: hsl(10, 100%, 72.0%);
    --tomato-12: hsl(10, 85.0%, 89.0%);

    --indigo-1: hsl(229, 24.0%, 10.0%);
    --indigo-2: hsl(230, 36.4%, 12.9%);
    --indigo-3: hsl(228, 42.7%, 18.1%);
    --indigo-4: hsl(227, 45.6%, 21.4%);
    --indigo-5: hsl(227, 47.8%, 24.4%);
    --indigo-6: hsl(226, 50.3%, 28.8%);
    --indigo-7: hsl(226, 53.3%, 36.6%);
    --indigo-8: hsl(226, 60.0%, 52.0%);
    --indigo-9: hsl(226, 70.0%, 55.5%);
    --indigo-10: hsl(230, 73.9%, 63.3%);
    --indigo-11: hsl(235, 100%, 80.0%);
    --indigo-12: hsl(235, 93.0%, 93.0%);

    --backdrop-color: rgba(0, 0, 0, 0.3);
  }

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

  --component-normal-danger: var(--tomato-3);
  --component-hovered-danger: var(--tomato-4);
  --component-selected-danger: var(--tomato-5);

  --text-lc: var(--mint-11);
  --text-hc: var(--mint-12);

  --text-hc-danger: var(--tomato-10);

  --border-radius-sm: .8rem;

  --component-sage-normal: var(--sage-3);
  --component-indigo-normal: var(--indigo-3);
  --component-tomato-normal: var(--tomato-3);
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
