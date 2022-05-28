import type { AppProps } from 'next/app';
import '../../public/styles/globals.scss';
import '../components/Footer/styleSwiper.css';
import '../components/Destaques/Carrosel/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
