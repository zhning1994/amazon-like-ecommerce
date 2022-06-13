import { createTheme } from '@mui/material/styles';
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Link,
  Typography,
  Container,
  Box,
  Switch,
  Badge,
} from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import { Store } from '../utils/Store';
import { useContext } from 'react';
import jsCookie from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#fb8500',
      },
      secondary: {
        main: '#219ebc',
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Ning Ecommerce` : 'Ning Ecommerce'}
          {description && (
            <meta name="description" content={description}></meta>
          )}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <NextLink href="/" passHref>
                <Link>
                  <Typography sx={classes.brand}>Ning Ecommerce</Typography>
                </Link>
              </NextLink>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}></Switch>
              <NextLink href="cart" passHref>
                <Link>
                  <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}>
                        Cart
                      </Badge>
                    ) : (
                      'Cart'
                    )}
                  </Typography>
                </Link>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Ning Ecommerce</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
