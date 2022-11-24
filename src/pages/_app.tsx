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
import Link from 'next/link';

//Prismic

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../../prismicio';
import FilterProvider from '../components/hooks/useFilter';

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
    <PrismicProvider
      internalLinkComponent={(
        { href, ...props } //especifica qual componente usar para links internos
      ) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <ThemeProvider theme={scroltheme}>
        {loading && <Loading />}
        <CartProvider openBag={openBag} setOpenBag={setOpenBag}>
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
          <GlobalStyle />
        </CartProvider>
      </ThemeProvider>
    </PrismicProvider>
    // </ScrollPage>
  );
}

export default MyApp;
