import type { AppProps } from 'next/app';
import '../components/Footer/styleSwiper.scss';
import '../components/Destaques/Carrosel/style.scss';
import { GlobalStyle } from '../../public/styles/globals';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const theme = {
    open: openMenu,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component
          {...pageProps}
          openMenu={openMenu}
          handleOpenMenu={handleOpenMenu}
        />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
