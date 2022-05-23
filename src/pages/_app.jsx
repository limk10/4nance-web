import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { extendTheme } from "@chakra-ui/react";

// import(`../assets/css/sass/themes/theme_default.scss`);

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
  // fonts: {
  //   heading: "Montserrat,sans-serif",
  //   body: "Montserrat,sans-serif",
  // },
  colors: {
    primary: {
      300: "#ffc709",
      500: "#dfac00",
    },
  },
  components: {
    Button: {
      baseStyle: {
        bgColor: "primary.300",
        borderRadius: "3px",
        _hover: {
          bgColor: "primary.500",
        },
      },
      defaultProps: {
        variant: "base",
      },
    },
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

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
