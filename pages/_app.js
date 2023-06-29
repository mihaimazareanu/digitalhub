import { ThemeContextProvider } from "@/contexts/ThemeContext";
import Layout from "@/layout/Layout";
import Theme from "@/styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Hub Hamburg</title>
        <meta name="description" content="Freelance webpage for Mihai Mazareanu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <ThemeContextProvider>
        <Theme>
          <Layout>
          <Component {...pageProps} />
          </Layout>
        </Theme>
      </ThemeContextProvider>
    </>
    )
}
