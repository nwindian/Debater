import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

const Document = () => {
  const getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  return (
    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <Main />
      <NextScript />
    </Html>
  )
}

export default Document
