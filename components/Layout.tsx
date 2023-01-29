import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <header className="page-header" role="banner">
                <h1 className="project-name"><Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>XIVLauncher Help</Link></h1>
                <h2 className="project-tagline">FAQ and Knowledgebase for XIVLauncher</h2>

                <Link href="/" className="btn">Main Page</Link>
                &nbsp;
                <a href="https://github.com/goatcorp/FFXIVQuickLauncher/releases/latest" className="btn">Download XIVLauncher</a>
                &nbsp;
                <Link href="/" className="btn">All FAQs</Link>
            </header>
            <main id="content" className="main-content" role="main">
                {children}
                <footer className="site-footer">
                    <span><a href="https://github.com/goatcorp/faq">faq</a> is maintained by <a href="https://github.com/goatcorp">goatcorp</a>. <b><Link href="/support">Support what we care about!</Link></b></span>
                </footer>
            </main>
        </>
    )
}