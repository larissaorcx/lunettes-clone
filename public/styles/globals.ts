import { createGlobalStyle } from 'styled-components';

interface GlobalProps {
  theme: {
    menu: boolean | null;
    bag: boolean | null;
  };
}
export const GlobalStyle = createGlobalStyle<GlobalProps>`

  
@font-face {
  font-family: MonumentExtended;
  src: url('/font/MonumentBold.otf') format('opentype');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto Mono';
}

body {
  width: 100%;
  height: 100%;
  overflow: ${props =>
    props.theme.bag || props.theme.menu ? 'hidden' : 'hidden scroll'};


}


li {
  list-style: none;
}
`;
