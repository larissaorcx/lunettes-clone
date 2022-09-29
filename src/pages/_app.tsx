import type { AppProps } from 'next/app';
import '../components/Footer/styleSwiper.scss';
import '../components/Detalhes/style.scss';
import '../components/ListProducts/CarroselListProducts/style.scss';
import { GlobalStyle } from '../../public/styles/globals';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading/Loading';
import CartProvider, { useCart } from '../components/hooks/useCart';
import ScrollPage from '../components/hooks/ProviderscrollPage';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const [openBag, setOpenBag] = useState<boolean | null>(null);

  const scroltheme = {
    menu: openMenu,
    bag: openBag,
  };

  return (
    // <ScrollPage>
    <ThemeProvider theme={scroltheme}>
      {loading && <Loading />}
      <CartProvider openBag={openBag} setOpenBag={setOpenBag}>
        <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
          <Component {...pageProps} loading={loading} setLoading={setLoading} />
        </Layout>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
    // </ScrollPage>
  );
}

export default MyApp;
