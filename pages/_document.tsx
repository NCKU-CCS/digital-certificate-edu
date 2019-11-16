import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html,
            body {
              margin: 0;
              background-color: #f5f5f5;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
