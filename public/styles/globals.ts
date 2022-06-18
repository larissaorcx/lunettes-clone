import { createGlobalStyle } from 'styled-components';

interface GlobalProps {
  theme: {
    open: boolean;
  };
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  
@font-face {
  font-family: MonumentExtended;
  src: url('../font/MonumentBold.otf') format('opentype');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  overflow: ${props => (props.theme.open ? 'hidden' : 'hidden scroll')}
}

li {
  list-style: none;
}
`;
