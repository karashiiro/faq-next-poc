import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preload" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" as="style" type="text/css" crossOrigin="" />
                <meta name="theme-color" content="#157878" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <script data-goatcounter="https://goatcorp.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}