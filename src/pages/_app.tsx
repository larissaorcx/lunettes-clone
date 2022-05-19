import type { AppProps } from 'next/app';
import '../../public/styles/globals.scss';
import '../components/Footer/styleSwiper.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
