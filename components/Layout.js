import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Link, Typography, Container, Box } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import classes from "../utils/classes";

export default function Layout({ title, description, children }) {
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
            mode: 'light',
            primary: {
                main: '#fb8500'
            },
            secondary: {
                main: '#219ebc'
            }
        }
    });
    return (
        <>
            <Head>
                <title>
                    {title ? `${title} - Ning Ecommerce` : 'Ning Ecommerce'}
                    {description && <meta name="description" content={description}></meta>}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={classes.appbar}>
                    <Toolbar sx={classes.toolbar}>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography sx={classes.brand}>Ning Ecommerce</Typography>
                            </Link>
                        </NextLink>
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
    )
}
