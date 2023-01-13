import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import store from "../redux/store";

import "rc-steps/assets/index.css";
import "@fontsource/open-sans";
import LoadingScreen from "../components/LoadingScreen";
import AccountConfirmation from "../components/AccountConfirmation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    primary: {
      300: "#ffc709",
      500: "#dfac00",
    },
  },
  components: {
    Steps,
    Link: {
      baseStyle: {
        color: "#3a3a3a",
        transition: "color .2s",
        _hover: {
          color: "primary.500",
          textDecoration: "none",
        },
      },
      defaultProps: {
        variant: "base",
      },
    },
  },
});

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CSSReset />
          <LoadingScreen />
          <AccountConfirmation />
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
