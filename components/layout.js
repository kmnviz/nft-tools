import Head from 'next/head';
import Menu from './menu';
import Styles from './layout.module.css';

export default function Layout({children, siteTitle}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content=""
                />
                <meta name="og:title" content={siteTitle} />
                <title>{siteTitle}</title>
            </Head>
            <header>
               <Menu />
            </header>
            <div className={Styles.wrapper}>
                {children}
            </div>
        </>
    )
}