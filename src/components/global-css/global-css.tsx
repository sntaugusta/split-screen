import { Global, css } from '@emotion/react';

export const GlobalsStyle = () => (
  <Global
    styles={css`
      /* latin-ext */
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-style: normal;
        font-weight: 200 900;
        src: url(https://fonts.gstatic.com/s/zalandosansexpanded/v2/JTUJjJci8Cy470GaeFwsix1hi3aTmrgRwU-zokw7cX4.woff2)
          format('woff2');
        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329,
          U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-style: normal;
        font-weight: 200 900;
        src: url(https://fonts.gstatic.com/s/zalandosansexpanded/v2/JTUJjJci8Cy470GaeFwsix1hi3aTmrgRwU-zrEw7.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329,
          U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      :root {
        --background: #01021b;
        --foreground: #171717;
      }

      html,
      body {
        max-width: 100vw;
        overflow-x: hidden;
      }

      body {
        color: var(--foreground);
        background: var(--background);
        font-family: 'Zalando Sans Expanded', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
      }
    `}
  />
);
