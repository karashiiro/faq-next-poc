import { AppProps } from "next/app";
import '../styles/global-styles.css'
import '../styles/app.css'
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
