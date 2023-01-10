import type { AppProps } from 'next/app';
import '../components/Footer/styleSwiper.scss';
import '../components/Detalhes/style.scss';
import '../components/ListProducts/CarroselListProducts/style.scss';
import { GlobalStyle } from '../../public/styles/globals';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading/Loading';
import CartProvider, { useCart } from '../hooks/useCart';
import ScrollPage from '../hooks/ProviderscrollPage';
import Link from 'next/link';

import { Roboto_Mono } from '@next/font/google';

//Prismic

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../../prismicio';
import FilterProvider from '../hooks/useFilter';

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

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
    // </ScrollPage>
    <PrismicProvider
      internalLinkComponent={(
        { href, ...props } //especifica qual componente usar para links internos
      ) => <Link href={href} {...props}></Link>}
    >
      <main className={robotoMono.className}>
        <ThemeProvider theme={scroltheme}>
          {loading && <Loading />}
          <CartProvider openBag={openBag} setOpenBag={setOpenBag}>
            <GlobalStyle />
            <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
              <FilterProvider>
                <PrismicPreview repositoryName={repositoryName}>
                  <Component
                    {...pageProps}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </PrismicPreview>
              </FilterProvider>
            </Layout>
          </CartProvider>
        </ThemeProvider>
      </main>
    </PrismicProvider>
  );
}

export default MyApp;
