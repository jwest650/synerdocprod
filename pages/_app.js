import { ChakraProvider } from '@chakra-ui/react';
import { GeneralProvider } from '../context/GeneralContext';
import '../styles/globals.css';
import { registerLicense } from '@syncfusion/ej2-base';

function MyApp({ Component, pageProps }) {
  registerLicense(
    'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0ViUX5bdHJQRGFYVUE='
  );
  return (
    <ChakraProvider>
      <GeneralProvider>
        <Component {...pageProps} />
      </GeneralProvider>
    </ChakraProvider>
  );
}

export default MyApp;
