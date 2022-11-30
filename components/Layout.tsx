import React, {ReactNode} from 'react';
import Head from 'next/head';
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: ReactNode
  title?: string
}


const Layout = ({children, title = 'React Typescript Starter'}: Props) => {
  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Header></Header>
    {children}
    <Footer></Footer>
    <div id="dialog-container"></div>
  </div>
}

export default Layout
