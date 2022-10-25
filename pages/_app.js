import { ChakraProvider } from '@chakra-ui/react';
import { GeneralProvider } from '../context/GeneralContext';
import '../styles/globals.css';
import { registerLicense } from '@syncfusion/ej2-base';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  registerLicense(
    'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0ViUX5bdHJQRGFYVUE='
  );
  return (
    <ChakraProvider>
      <GeneralProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeneralProvider>
    </ChakraProvider>
  );
}

export default MyApp;
