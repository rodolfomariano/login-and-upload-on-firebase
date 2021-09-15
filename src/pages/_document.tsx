import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocuement extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}