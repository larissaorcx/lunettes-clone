import type { AppProps } from 'next/app';
import '../components/Footer/styleSwiper.scss';
import '../components/Destaques/Carrosel/style.scss';
import '../components/Detalhes/style.scss';
import '../components/ListProducts/CarroselListProducts/style.scss';
import { GlobalStyle } from '../../public/styles/globals';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
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
        {loading && <Loading />}
        <Layout openMenu={openMenu} handleOpenMenu={handleOpenMenu}>
          <Component {...pageProps} loading={loading} setLoading={setLoading} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
