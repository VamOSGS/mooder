import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mooder</title>
        <meta name='description' content={'Mental health app'} />
        <link rel='icon' href={'/favicon.ico'} />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
