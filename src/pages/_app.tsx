import type { AppProps } from 'next/app';
import '../components/Footer/styleSwiper.scss';
import '../components/Destaques/Carrosel/style.scss';
import { GlobalStyle } from '../../public/styles/globals';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const theme = {
    open: openMenu,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout openMenu={openMenu} handleOpenMenu={handleOpenMenu}>
          <Component {...pageProps} setLoading={setLoading} loading={loading} />
        </Layout>
        {loading && <Loading />}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
