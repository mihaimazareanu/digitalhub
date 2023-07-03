import { ThemeContextProvider } from "@/contexts/ThemeContext";
import Layout from "@/layout/Layout";
import Theme from "@/styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Hub Hamburg - Professionelle Webentwicklung und Webdesign für Unternehmen in Hamburg</title>
        <meta name="description" content="Digital Hub Hamburg bietet professionelle Webentwicklung, Webdesign und Beratungsdienstleistungen für Unternehmen in Hamburg. Kontaktieren Sie uns für individuelle Websites, die Ihre Marke online präsentieren." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
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
