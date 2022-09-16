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

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loading />}
      <CartProvider>
        <Layout>
          <Component {...pageProps} loading={loading} setLoading={setLoading} />
        </Layout>
        <GlobalStyle />
      </CartProvider>
    </>
  );
}

export default MyApp;
