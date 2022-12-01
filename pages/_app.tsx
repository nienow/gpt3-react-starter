import type {AppProps} from 'next/app';
import {GlobalStyle} from '../providers/GlobalStyle';

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle></GlobalStyle>

      <Component {...pageProps} />
    </>
  );
}

export default NextWeb3App;
