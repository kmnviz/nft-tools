import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';
import Styles from './layout.module.css';

export default function Layout({children, siteTitle}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
                <title>{siteTitle}</title>
            </Head>
            <header>
               <Navbar></Navbar>
            </header>
            <div className={Styles.wrapper}>
                {children}
            </div>
        </>
    )
}